import { createCategoryPage } from "@/app/actions";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import { SelectedCategory } from "@/app/components/SelectedCategory";
import { CreationSubmit } from "@/app/components/Submitbuttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StructureRoute = ({params}: {params: {id: string }}) => {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe your Home
        </h2>
      </div>

      <form action={createCategoryPage}>
      <input
        type="hidden"
        name="homeId"
        value={params.id}
      />

        <SelectedCategory />

        <CreationBottomBar />
      </form>
    </>
  );
};

export default StructureRoute;
