"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      if (categoryList) {
        setCategories(categoryList as ICategory[]);
      }
    };

    getCategories();
  }, []);

  const onSelectCategory = (category: string) => {
    let newUrl = "/";
  
    if (category && category !== "All") {
      newUrl += `?category=${category}`;
    }
  
    router.push(newUrl, { scroll: false });
  };

  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle flex items-center">
          
          <Image
            src="/assets/icons/categories.svg"
            width={32}
            height={32}
            className="cursor-pointer"
            alt="Category button"
          />
          <span className="hidden md:block ml-2">Categories</span>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-6 bg-white">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
          </SheetHeader>

          <Separator className="border border-black-50" />
          <div className="flex flex-col gap-4">
            <button
              onClick={() => onSelectCategory("All")}
              className="select-item p-regular-14"
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => onSelectCategory(category.name)}
                className="select-item p-regular-14"
              >
                {category.name}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default CategoryFilter;
