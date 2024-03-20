"use client";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";

export const HomeFilters = () => {
  const active = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 font-semibold capitalize shadow-none ${active === filter.value ? "bg-primary-100 text-primary-500" : "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-400 dark:text-light-500 dark:hover:bg-dark-300"}`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};
