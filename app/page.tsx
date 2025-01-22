import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Keko</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            className="rounded-xl object-cover"
            src="/banner-01.png"
            fill
            alt="Agende nos melhores com FSW Barber"
          />
        </div>

        {/* AGENDAMENTO */}
        <Card className="mt-6">
          <CardContent className="flex">
            {/*ESQUERDA*/}
            <div className="flex flex-col gap-2 py-5">
              <Badge>Confirmado</Badge>
              <h3>Corte de Cabelo</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
