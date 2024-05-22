import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  content: string;
  link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, content, link }) => {
  return (
    <Card className="w-[350px] shadow-xl my-4 md:my-0">
      <CardHeader className="flex flex-row justify-between">
        <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        </div>
        <div>
          <img src="https://via.placeholder.com/50" alt="placeholder" />
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="mt-12">
        <Button asChild>
          <Link href={link}>Play</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
