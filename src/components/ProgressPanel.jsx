import Card from "./Card";
import { TreePine } from "lucide-react";

const ProgressPanel = ({ totalTimeStudied, trees }) => {
  return (
    <Card className="p-4 md:p-8 bg-gray-800 mb-4">
      <h2 className="text-xl font-bold mb-4">Progress</h2>
      <div className="mb-4">
        <p>Total Time: {Math.floor(totalTimeStudied)} minutes</p>
        <p>Trees Planted: {trees}</p>
      </div>
      <div className="flex gap-2 overflow-x-auto p-2">
        {Array(trees)
          .fill(0)
          .map((_, i) => (
            <TreePine
              key={i}
              size={24}
              className="text-green-400 flex-shrink-0"
              style={{ filter: "drop-shadow(0 0 4px rgb(74 222 128))" }}
            />
          ))}
      </div>
    </Card>
  );
};

export default ProgressPanel;
