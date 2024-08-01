
import Link from "next/link"
import Footer from "./footer"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ұнаған мелодияны домбырада ойнап көріңіз
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Кез келген әуенді AI көмегімен домбыраның сандық ноталарына келтіреміз. 
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="main"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Байқап көру
                  </Link>
                </div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Kazakh_Dombra2.png"
                width="550"
                height="550"
                alt="Hero"
                className="object-scale-down max-h-full mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Қалай жұмыс істейді</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed ">
                  *Бұл әзірге бета нұсқасы. Кейбір қиын диапазонды әуендерде қате жұмыс істеуі мүмкін. 
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-row justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Әуен форматын таңдаңыз:</h3>
                      <p className="text-muted-foreground font-semibold "> <Link className="text-blue-500" href='search'>Іздеп табу</Link>, <Link className="text-blue-500" href="record">Таспаға жазу</Link>, <Link className="text-blue-500" href="upload">Құрылғыдан таңдау</Link> </p>
                      
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Әуенді өңдейміз...</h3>
                      <p className="text-muted-foreground">
                        Дыбыстан ноталарды аламыз, ноталарды сандық нотаға айналдырамыз
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Домбырада ойнаңыз</h3>
                      <p className="text-muted-foreground">
                        Экраннан қайталаңыз 
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://tengrinews.kz/userdata/news/2023/news_512438/resize/photo_446047.jpeg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Алғашқы пікірлер</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Бета тестілеушілердің алғашқы пікірлері
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="flex flex-col items-start space-y-2 rounded-lg bg-muted p-4">
                    <p className="text-muted-foreground">
                      Мен домбырада мүлде ойнай алмайтынмын. Бірақ сонда да кейбір әуендерді домбырада қайталап ойнап көрдім. 
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="data:image/jpeg;base64,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"
                        width="40"
                        height="40"
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Санжар Аширбеков</p>
                        <p className="text-xs text-muted-foreground">КБТУ 3 курс студенті</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg bg-muted p-4">
                    <p className="text-muted-foreground">
                      Нарықта осыған ұқсас сервис көрмедім. Әрине әлі жақсартатын заттар көп, бірақ бастама жаман емес
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFhUWFxcXFhgXFxcVGBcXFxUYFxUVFxcYHSggGBolHRgVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQFS0dHR0rLSsrKy0tLS0rLS0tKy0tLSstLSstLSstLS0rLS03Ky0tKy0tLS0rLTctLS0rKystK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xABDEAABAwIDBAgEAwYEBQUAAAABAAIRAyEEMUEFElFhBiJxgZGhsfATMsHRB1LhFCNCYnLxFTOCoggkkrLCFiVTY9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAgICAwAAAAAAAAAAAQIRAyESMQRRQXETImH/2gAMAwEAAhEDEQA/AJwoBBBJQ0ES6hAEgjSdWoAJ0QHW8ugkGSLmxN/sE2x+L+VjT1nmLZgX3j3DzIRsz/eRpk3FDJoJjgLWHHLzUfitvtaYF9D39nuyWxpOhyMFV7GbcDGk2kgRf+qfTzCkGY5rbE/KL99wjY0euqgeXnkjp1ZVG2jt+XmDANwZ/KcuGqnMJtdvUbYSJJ9R6eKXl2eljQTKriw2xMWkk8NO838Cu6+Laxu8TAjX07bhUR0EcLik+QCMjklEECNBCEAF0iCNACEEEEA0QhGggAEaJFKA7THHVIDf6mDxcAne/eFEbaNhx3gOwyC0+KVOHtSrbe5W+g981TNq7dYzEPe6XbrAxrQPmLnmb6DqieMQn2O2yN2b2gDtBJM88vNUPax3yX5mWkdhtPZJ9UvZprF9KXPO71pP8I6rGjQZy7v8AkGYk58DB7BefRQuyKEucXaTw4GO7XuUlvAkN4DedxytPdHilkcO67iae+65u0NBmSYvyEH3CaTUe0kndabkmR2mM+8+IT1zy5waAIaLnMA68jHrKdYapJsGwLl77ga70Zf27lJq7VY8vtkGxJAAHaeNypAbTLSIMka89FNux38LDY8g2baxl5FRGO2NVqAvGfc0X5mI1unAd4bavxH71R5AGW7J8Dl3lP8AE7ZpktYz5WXO8RBP827p91UzSLHhu+HXh26JA0gJfB4WGgkuvbQcLoojSMBiq9cbzT8Nn5iOs7L5W/wN7bqV/ams6klzovrECTJ48lntDpJiGtDGwGg3dYGCbqT2btUPqsYHy0NgQ3dlznQTNyTF57U9lpfAuoSFB8345dn90sXK0DhGilGgDRI0SAbQhCNBAI1n7omYATV2IdnaOIJd42skts4ndbMwJuZjz95diou0Ns02fLUeTwDiG9oacuxKqXHHbTDL7wy1sYN5vHDiq3tPpAKnUaTBzkCfGLaZqoYvbD3nXvN1xQxBgnQ+/olQmMdVmnnrHmzTxUVXcA1v9PlJ+wROxO9TLeZ+jp8GOTHE1pABzgepsloz39oAm+f1Mf8A6XeCkkvJgEzJ4AyPoopgLoGXP3yUlWxIADBYD6Z+SNDZeti947mTBcgann75cZdYZziPmDWjM8OXN0/RQmGdJ4E3J7dBw/VOamOAgDTLg0ZWHH3qgk6doU6IhgBdq51yIuSTppYapo3pHWqWBcJmAIEjUmBMd/JQNWvJg9/PgPf2T7CYaW3kNIEnV0cOXgjQP8OXPdMggZ5dwkW9lPqhaABckaCwHASfsol2PaOqwTpAytoOWV05oseR7m/ExbzKVMcRP8M+7kpfZ72scHbkwZ/sdD5JnWpAfO4H+Vuna469qcUa0CzZB4m3gAkbQ9jdIKdSGmWHKHW81LYeuHAuJG6Cbk2zN/BZGMQ2eB7SPP6qQ2djiXRvWGkA+U28k/IeLUqOKY+zXB3YZ80uofY2MpvAAZDv6Tf/AFR5SpgLSIo0EAggjZcudAQC5egM36dbbcahosNmnrO03iPlHCOPNUl9cTOfFS3SmqP2msJyeWgcIgH0juUPTpH6pKdfFGcewup0nMW9PWPNEadiRy4IsO+xafc/qgtlG1Mjxz7R+lu9NKufvJLlhmIz10ntRMYXXA5wUG6whiSdA6B2CQuMz77Pul6NPdneBggibHOyDMOQcp4QlbDkcmYAHzEEnvySJadLk5dmU+qk20NY0jLmY9R4JvjKZaS0CB9B9yUplDuJOjuMuSCR3x2DXtNkdTEOqGLx5nmeKaRyk89O5KNqHST70CqlIf0g1uoA11J984CFXbBA3WKNqkk5o2Ni+vFL9jVSdBs9ao7saPKAEu+u5xhrYGV8rc9fJRdOtFzfdv2u098kdHFuJ5n3mlqmlqdKL2nvS9HO0A9xH6aKKFcAgRvHjoFIUKpd/lw06ggAHvzUWGunR2m2pAaSypBLCCd10Ztc2bkZ2g+qvNEGBvZ6rLtk4t1NzXZEEEx9NOXetSo1A5ocMiAR2FXgnMoEESCtBkggggMR6RUg3GYjWKjj4mfqo/40HTmprpfgjSxNWTO+41J/qcTHoq2X+ykez1lbRKtjKBf34SEzoN1OSf7Kw2/UBI7vRK3RybSOzNlOjeJN+cKaobIBzFud/NSWEwsAKXwuH4rG5N8cEE3YQOi7dsBvBWujhwnTcIMlncq2mEUarsURYKKxuxCTN/ZWoHAA6Ln/AAdpKW6LhGSVOj5jK/rdH/6dOgufDmtZOxWzYJRuyWjRHnkP4oyzDdFSTeeXNL1OiRAm2XZHatVZs0RkEHbPA0Hgl55H/Hiw7aWwnsm1h7lRTaJGmdp4DXx+63TGbHa4ERnyWXdL9i/BqSBYzy1WvHyb6rHk49dozBYUjQ/XvhO6jY0TWhQD8hfgTBnlp3WXb6LgLkxx/tZaMjzBVTvDhIFjzgjtWsdGahdhqU6NjuBIafABY5SqQRccCZiRwI48wtn2C5pw9ItyLGx4J4e05ej9BBBaIMgggggMq/E5/wDzEZdUd/D0VMaz391bvxGvjSNAxhHZf33KpuOcJAtSl1hkrXsTDgaQVX9m0fFWrZbYUZNMFkoiwTyiUxwzpCdsC566sUthSn1JyiMOYKkKLzKTRJU2pwwJpTcnWHffJBUpuBKMphc1OxcioeCYhwGpN7EGvXZKAavpqpdNdlipTNrq4vURthgLTKj0L3GLYeiW1C3jO7wPFp9e5d1MR2jS58L/AHCmttYZoedJyPA6d33Vcxz7zETn/wCQPqt5duTKarl7utkO9oPp9lrXQl5OEpzxd4bxhZFTYSR38/enitt2G2MPRER+7ZYf0haYe0ZHyCCC0QZIkChKAzb8UMCRWp1os5ppk8xceU+CotKnJ7L/AGW7bZ2a3EUX0nCZFuTh8ru4rFX0y0FrhDmm44QXAA9mfggzvAkCFYtm3KrGzhvOVw2fh4AWOVa4RKUHQpOlcBR1Kmn+Gfu2WNdGJ/hqakKNHM++aY4WuDabqVoVBCTQrSCWougoUaQOiKiCXII6c5GKaTaZKcNPFMvQxTQcuy4LlyBDeqo/aDbKReEjWYoqmZ9JGQSf7dn6ql4257bjmNR4eivnTalu34+HYVQMQCYjQ+wtOO9ObkmqFI7pGRgju0I9FuWBZu02t4ADu08lj+xNkmtWawG5IJEQIESZ71slMWHYujBjk7QRSgrQZII0EARMLEtuGcRWdxeT4mQtuWPdKcF8KvVAyBMdhMtCVqpDfo3T60FXOiIVP6K/MexWitiN0TwWWXtrjeky2AE5oNB1CpTto1HAx45JJ7K4vJ9VHivzaBVo9YOaRzhPqVQ8FmtDbeKp8THLTkpPBdMXGA9seSi4rx5Ptpmz8VaeCVwtaxJVQwnSCnuu61yDrdTeHxM4Yu/llRtr1UlhsT62TsZ8lS8ZtwBgLTdQWL6a4n5WsmNRJ8bJztOWWmqhl80bngWnNY1T6RY5x1A4C36qUwWMxYEw4TrvQr1EeVrTiuHhVPAbVriPiZzeJ9CFYcLiw8AhRVyqr+IFCaM8CFmFNtjOnnwWudNGg0COY8eCzCjgySRBIzym4NrAX0VYemfLN1a/wzwW8X1tQS0acDbujwV+ConRyhUotw7XS2XudumRBe/XujuV8fmVvx57tjPm4vHGZfYoRokFq5zJBGggAs46Y0JqVeJc2OyIPr5LSAqH0ypw+oew/wC0KcmmH5Vvo+OsYFhZTmLbITTo9h4ZJzJKlX07WWeVaYzpB47HCkBAk+/FR2I2hiSGuB3QTAyn9FYcTs0G8X0XFFjS3cfTa4dsXGRslBZUPs91apH71xcam4GuEyPzAg6cE7rYV7XbrhBmIMlp/pJ15KxbKw9Omd5lOHcS4u9ckptCjTdd1EGdZIPalbFTGxXtj4befkQQclqey8GPg7vJVDo3hx8eSFpdFgDFllNtMOmf7U2eKZ6rCeECVVcc8uduAidGtMD/AFOHotXxmGkOtPu4VTxWEh87jW8IAhTjNLym2fY5lWm8jeNi0dXnF79qndkbTxVPfkuqU2ES6JIB13TmLaEFSuKwLHGTTDnWuC5htx3c1M4PCtDTTZTAaSdS48ieJWu5pj4Zbd7G2jTrtIAG8RILcnfUHkVO4GlA5pDZ+w2UwC0Q456A9qk2MIWWm0V3pfSnDu5Kt9D93feXGJGfaYhXvamGD2ObxBHkVS+j2BLadR5bbf3e8f3CN9UeO8osG0KHWpOFxvhSxKTwdLqMnTed5QPVdytvjz3UfLy6mI0ESC6XCZBBBGgAFWek9EF8kSC0T5hWcKJ6R0uoHRIBg9h18Y8VOXpfHdVUsDT3G7ucT4TZP8O4JnvibZJWk+6xreJNtKUX+HNN4StFwhPKaz200a08E1uQSOOjVShULjXSUQ6kejdKahKvw+UKrdG8NAlWhx6qDkJWTLG4SbgJ7IREFSpC/wCGs4J5h8M1mQTupS1ScxogaKU1082SbXIPegaE7IphVpsbhhTaIEmOZL5J8SU8c6yRbRndcSNYGZNzCR4+ylOnusAOYEeLpSRTrGWga5lNV18U1i4+fLeQ0EAiWjAzRhBGEAIXNWkHAtIkEEHsK7C6hAUXaeBNB+6TIN2niMr800aVY+l9Lq038CW+IkehVZD7rHOOjC7SmEqqXoulVzDvupzBOWNjeU7r1QGqEY/edvHIGAneOqE9VQu0cQafYnBk0XYxBaFNNaN0rL+ju3wB80j07QrRQ2+3dJLgANSUrdKnaxlstXDakGCoTZnSH479ykxxAzcYA8JlT2IoS2RmL9qhRUJtWAXeHfIuuao4p0GpdwXYSZZBQ3lJhWdZdYYtZwLvdgkalzHuEdOmBkIWvHx+XbDk5Zj07qOJMrlGhC65NOO3fYkEaCCNEEEEAYXS5RygI7pDS3sO/i2HDuN/KVRd660p7A4FpyIIPYbFZvXpFj3Ndm0kHuKzzjXCnDDkpbCVLTyUOw2TltXqRxWOUb406FSSVHbQdNouujVOWv6LtuGLyCCFWMkTllb6RuB2YS6RlN1YtlbLkmetwHfqnuF2fDffBO9iYZwe4C9+N1OVlOSxM7Jotp5Nj36qW+IFFfDcDB9+H2XfxnDT39VOlTKnsbpnQo6hSDa1r+yu3uU1rLuEajdUmu6hKQcbSfBSAGaUSWHynilF28c1jHDyXeVHKC5QVs3SCJBANYQQRoAguoQQQBqndMMHu1BVGT7Hk5v3H/aVcU021hRUoVGkfwkjk4CWkJZTcVFAo1ZSj6kRwUcx8J3RqcVjW0J4jHFpMMc5Is2vXPyU3DsATowOwpzhca1mYB8rKWuOpS2zulNVlnsc4c2kHxAUm3pHVd/l03t5hpv3lJ0drUDn6e+ITvD7bw4sJ8FFdM8Pt3S6Q4wZ4cuHcD6p8zbFV4j9leCebYnxXeEx1J+QvbNSNOoPdlNpWY38I3CYx5JD2Fh1m/op1tXqhR9Utz1XPxiM8vfNTtGtHlV+ia1LmBrKRrVrHvS+DaYc82AEmbANkAEzzIVYzeUiM7rG04CNEgu5wjRIISghIIIIBAIII0AYQRIwgOgie2QRxBHigoejtsVMacLTv8Km99V2gdZrKY5y6T2RxT1sb0z+u2CeVj4rugZ70rWZcg569s3+qZh267ksK39dnj6Tl2zDn8syneFqNIE3UpSInl75rKtZqo2hs0ujqETyhPKfR57o3QZ1urBgS2FL4WCbWSV4q5hdk1KcBzYHj6KYpUHqW328ig9zfdlFxaY0xZhCBJTbGOATzHYwAG4VfqONR0ZDzI4lTrRW7OcKN906DzIVn6PYdtR1Rj2hzX03McDcOaYkHtBhRODohoAPYrL0UoXe/QdXvNz9PFa8U/tEcvWFZNgto1Nm46pgK73PotfFNzrlrXAOpOnVpBAPAzGSvip/49YMNxWHqgR8Sk5jjxNJ4I8qhRdDulrarWUKxiqAGtcTapFu5/LXTgu6xwSrgjRFBSY0EUoIBEI0SCANAIKO27tmlhaRqVD/AEtHzPP5Wj66IMy6ZdIm4SiSCPivBFNvPV55D1gKG/CHCH4dbEOu6pU3JOZ3RLjPNzvJZxt3az8TWdVqG5yAya0ZNHILXPw2Z/7bR5moT2/FcPoFpjO2eVVfHkjEVqbhBZUPeHAOB802r0VeulXR39oAr0rVmCCP/kb+U884KpjL8iJkHMHIg8CsOTHVdHHl5Qyp1S2xy92UhQxtgfNIVKSRFIjJZr7i0YLH8/Awn9DaPW96eqpzN8e8k8w7aszPn4rOxrjlfpdWbQFjPchV2pDesR9+7uVewdOoTcgdx8VNUtkgiXEujioqu6bGuajsjGg+pUzgcKWydffJc4bBNHb9OSkQY1Ue1yaN8SS0NaAC95DWDi42HcMzyBV/2bgxSpMpi+6Lni43c7vMlUTom34+Pe7+DDt7t95PnAP/AFLRAV18GPW3J8nPd8WQ/wDEC0bmEOu/V8N1k/RY81x9/otW/wCIPE/vMJT4NqvPeWAehWShdMcy+dGOm5aG0sSSRkKmo4B/5hzz7VoFKqHAOaQWkSCDII4grBeXkclN9HOklXCmB1qZu5k27W/lPqi4nK2GUFCbK6UYauLVAx2rKnVcOzQjsKCnR7SqBdAk5Ki7a/EikyW4dhqO/M6Ws7h8zvJUTbHSPEYj/NquLfyDqs/6RY98pzEttM2907w9CW0/31QaNPVB/mfl3CVlm2NrVcTUNWq6ToP4WjRrRoExc5cqtaLexLaPwtrh2AY38j3g8pcXf+SxZab+DuL/AM+lza8d4IPoE8facvTTaZgqvdKujm9/zFFvW/jaP4wNR/MPNWVjZTikIzyTyxlnYxtxu2StYHLltNX/AG90X3yatADePzNyDuY4OVSq4NzSQWkEZg2IXFnjcXdhlMobUcPoprCYQQkKNDJSdFoH91hW8jtlABSFJ1te/wB8k1B5XXbqsWhTpUOmPvwSWIfUquFKi2Xuy4CM3OOjR7ukKDn1HimwS4+AGpJ0C0Do9sZuHZxe67nHMn6AaD7rXj47l+mfLyzCf6Po7sVmEoim0y4neqPOb3nM+gA0AClQESFR0Aldkmunn27u3nT8Z8f8TadQTakynSA7i9x/3QqO3LJS/TTGfGx2IqcajvAHdHkAol/p6q0jHiiI/l9UHDQ+SIdqYGXdoQQ3v5vVEgI5crohF70TIRRFGUQU0xhWz8NtpU6GJc6q8NZuEEntt2qptT/YbAa7QctfFEFaTtn8VGU+rhqJefz1JY3ub8x74VRx34kbRqG1cUxwpsa3zILvNWnE9D6ZsRLXCQeHYVS9u9Eq2HMhpezRzRJHJwHqE7KU0jq23cU9287E1i7j8R9uy9lc+i/T2q8ihit2sP4XOADxyDwJB8ecrP8AdI+o/RdNOTgYIPshT47VLr03elQp1G79J0gXc0wHNHG1nN5jLUBHuwsm2d0sxNKPhnrC4cRrxj3rZDF9Ksc8kmqWzowNYB2boELC/Gtu46cPk6n9mv71l1h8BWqfIy35ndRg/wBTs+66xFuPruPWrVD2ucfqnzdsYojcOJqOb+Vz3kRwALsk58X7p35X1Gru6fYDZzjSa1+KqiPiPp7rWTq0FxyHIRzmVIYP8cNnOMVKeIpcyxrx/scT5LCMS0i/HwT7o/0Wr4o/uqZc3Wo/q0xx5uPISVt4TGac1yuV29FbP/EzZVX5cbTaf/sD6XnUaB5p7tjpDhzhalSlXpPAYYLKjH6fykrE6H4dOLm0w4knMgboHGAMh2lMOmnROjg2Hc6zhEnmTCNEqrqm89zzqS7xM+qAOvC/2SdLLtv9vqujkqIbD79EAZ09foinT3y980Dl2+wgDg/l9fugkagcdYHmiQDWURRoIgcFG5BBKgeqldhD9+3sP/bKCCIG64JgOFaTciFzWpgi4QQWsRVQ6TbMomoxxpMJOZgXWe9JsO1leGNABa0wMpv9kEFF9qhPClOoQQW34SMC65e0IIJGdbBoNqYmhTeN5rq9NrhxaXgEW5L0LsrCU20nBrGtDSWtAEAAGAABkESCx5Pa8S2xKQ3XOjrSb96yv8Xj+57ajZ52cfUBBBKFWZj34I6nvwQQTAPz8fVB2aCCQc1c0aCCcD//2Q=="
                        width="40"
                        height="40"
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Жасулан Кайназаров</p>
                        <p className="text-xs text-muted-foreground">Arch user</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://el.kz/storage/storage/element/2022/09/07/mainphoto/21593/1200xauto_2CatMz3cf4NoxTnXLOudVmLmDwr4x2Gh2G0phVjy.jpg"
                width="550"
                height="310"
                alt="Testimonials"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}