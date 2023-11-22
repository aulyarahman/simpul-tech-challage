"use client";
import { Fragment, useEffect, useState } from "react";
import Selects from "@/components/selects";
import { Button } from "@/components";
import { ItemTask } from "@/app/_component/task/task";
import { CreateTask } from "@/api/task.service";
import Loading from "../_loading";

const ListTask = () => {
  const [newTask, setNewTask] = useState<CreateTask | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 2;
    const timer1 = setTimeout(() => setLoading(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="p-4">
      <section className="flex justify-between">
        <Selects
          className="w-[118px]"
          placeholder="My Task"
          options={["Personal Errands", "Urgent To-Do"]}
        />

        <Button
          onClick={() =>
            setNewTask({
              image: "",
              likes: 0,
              owner: "",
              tags: [],
              text: "",
            })
          }
        >
          New Task
        </Button>
      </section>

      <div className="min-h-[640px] max-h-[640px] overflow-auto">
        {loading ? (
          <div className="flex flex-col justify-center min-h-[640px] max-h-[640px] items-center">
            <Loading type="Task List" />
          </div>
        ) : (
          <Fragment>
            <ItemTask
              date={new Date().toISOString()}
              title="Cross-reference with jeanner for Case #19323"
              onDelete={() => setNewTask(undefined)}
            />
          </Fragment>
        )}

        {newTask && (
          <ItemTask
            date={new Date().toISOString()}
            title=""
            onDelete={() => setNewTask(undefined)}
          />
        )}
      </div>
    </div>
  );
};

export default ListTask;
