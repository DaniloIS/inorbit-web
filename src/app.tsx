import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { EmptyGoal } from "./components/empty-goal";
import { Summary } from "./components/summary";
import { useEffect, useState } from "react";

interface ISummary {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: number;
      title: string;
      completedAt: string;
    }[]
  >;
}

export function App() {
  const [summary, setSummary] = useState<ISummary | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/summary")
      .then((response) => response.json())
      .then(setSummary);
  }, []);

  return (
    <Dialog>
      {summary && summary.total > 0 ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  );
}
