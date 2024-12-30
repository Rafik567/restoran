import React from 'react'

const Dishes = () => {
  let data = [
    {
      id: 1,
      title: "1,800 ֏",
      image: "https://buy.am//media/image/fc/1f/91/Bread-with-Zaatar-Mayrig-Restaurant_200x200@2x.webp",
      description: "Զաթարով հաց Մայրիկ Ռեստորան",
    },
    {
      id: 2,
      title: "1,800 ֏",
      image: "https://buy.am//media/image/75/20/8c/Lahmajun-Mayrig-Restaurant-01_200x200@2x.webp",
      description: "Լահմաջուն Մայրիկ Ռեստորան",
    }, {
      id: 3,
      title: "1,600 ֏",
      image: "https://buy.am//media/image/45/10/bc/Bread-with-pepper-Mayrig-Restaurant1RFy0p68wbOb9_200x200@2x.webp",
      description: "Պղպեղով հաց Մայրիկ Ռեստորան",
    }, {
      id: 4,
      title: "1,900 ֏",
      image: "https://buy.am//media/image/c4/93/2a/Spinach-omelet-Mayrig-Restaurant_200x200@2x.webp",
      description: "Սպանախով ձվածեղ Մայրիկ Ռեստորան",
    }, {
      id: 5,
      title: "2,400 ֏",
      image: "https://buy.am//media/image/a9/44/6b/Basterma-omelet-Mayrig-RestaurantV1oVcJinRp3ul_200x200@2x.webp",
      description: "Բաստուրմայով ձվածեղ Մայրիկ Ռեստորան",
    }, {
      id: 6,
      title: "2,400 ֏",
      image: "https://buy.am//media/image/92/bf/14/Soujouk-omelet-Mayrig-RestaurantK6EABUHHTbxPQ_200x200@2x.webp",
      description: "Սուջուխով ձվածեղ Մայրիկ Ռեստորան",
    }, {
      id: 7,
      title: "1,500 ֏",
      image: "https://buy.am//media/image/dc/51/83/Eggs-Sunny-Side-Up-Mayrig-Restaurant_200x200@2x.webp",
      description: "Ձվածեղ Ակնիկ Մայրիկ Ռեստորան",
    }, {
      id: 8,
      title: "2,400 ֏",
      image: "https://buy.am//media/image/e6/1e/3a/Balila-Mayrig-Restaurant_200x200@2x.webp",
      description: "Բալիլա Մայրիկ Ռեստորան",
    }, {
      id: 9,
      title: "3000֏",
      image: "https://buy.am//media/image/87/40/87/Foul-Mayrig-Restaurant_200x200@2x.webp",
      description: "Full Myrick ռեստորան",
    }, {
      id: 10,
      title: "3000֏",
      image: "https://buy.am//media/image/e8/13/0f/Fatet-Falafel-Mayrig-Restaurant_200x200@2x.webp",
      description: "Falafel Fatteh Myrik ռեստորան",
    },
  ]
  let data1 = [
    {
      id: 1,
      title: "3000֏",
      image: "https://buy.am//media/image/06/68/28/Itch-salad-Mayrig-RestaurantNU0pT2jDjdSgQ_200x200@2x.webp",
      description: "Աղցան Իճ Մայրիկ Ռեստորան",
    },
    {
      id: 2,
      title: "2700֏",
      image: "https://buy.am//media/image/c8/0a/20/Armenian-salad-Mayrig-RestaurantP8sMz5nDFx2r0_200x200@2x.webp",
      description: "Հայկական աղցան",
    }, {
      id: 3,
       title: "2900֏",
      image: "https://buy.am//media/image/bd/78/0d/Eggplant-salad-Mayrig-RestaurantxBL2ORjMfsllS_200x200@2x.webp",
      description: "Սմբուկով աղցան",
    }, {
      id: 4,
      title: "2100֏",
      image: "https://buy.am//media/image/8f/fb/74/Lentil-salad-Mayrig-Restaurantjz0vArBduXJ1N_200x200@2x.webp",
      description: "Ոսպով աղցան",
    }, {
      id: 5,
      title: "2800֏",
      image: "https://buy.am//media/image/ed/12/45/Tabbouleh-Mayrig-RestaurantCGNRIWXi9KA5k_200x200@2x.webp",
      description: "Տաբուլեհ Մայրիկ ռեստորան",
    }, {
      id: 6,
      title: "6,400֏",
      image: "https://buy.am//media/image/25/bb/bb/Salad-Selection-Mayrig-RestaurantAzWyH3shGt63P_200x200@2x.webp",
      description: "Ընտիր աղցաններ",
    }, {
      id: 7,
      title: "2500֏",
      image: "https://buy.am//media/image/64/f6/79/Salad-Fattush-Mayrig-RestaurantcLIYZkh1iJ4fN_200x200@2x.webp",
      description: "Աղցան Ֆաթուշ",
    }, {
      id: 8,
      title: "4400֏",
      image: "https://buy.am//media/image/70/b1/ac/Beef-salad-Mayrig-Restaurant_200x200@2x.webp",
      description: "Տավարի աղցան",
    }, {
      id: 9,
      title: "3200֏",
      image: "https://buy.am//media/image/82/ee/77/Salad-with-olives-Mayrig-Restaurant_200x200@2x.webp",
      description: "Ձիթապտղի աղցան",
    }, {
      id: 10,
      title: "3200֏",
      image: "https://buy.am//media/image/b6/d6/63/SW93143_200x200@2x.webp",
      description: "Սնկով աղցան",
    },
  ]
  const data2 = [
    {
      id: 2,
      description: "Hummus Mayrick ռեստորան",
      image: "https://buy.am//media/image/0d/fd/08/Hummus-Mayrig-Restaurant0RZh4zqRyou3w_200x200@2x.webp",
      title: "2300֏",
    },
    {
      id: 3,
      description: "Hummus Snowbar Myrick ռեստորան",
      image: "https://buy.am//media/image/2f/ad/9a/Hummus-Snoubar-Mayrig-Restaurant4xwbvfpUORgzR_200x200@2x.webp",
      title: "3300֏",
    },
    {
      id: 4,
      description: "Հումուս Սուջուխ Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/df/50/f1/Hummus-Soujoukh-Mayrig-Restaurant_200x200@2x.webp",
      title: "3000֏",
    },
    {
      id: 5,
      description: "Հումուս Բաստուրմա Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/34/48/ea/Hummus-Basterma-Mayrig-Restaurant8cQyHMkAIsVNL.webp",
      title: "3200֏",
    },
    {
      id: 6,
      description: "Մութաբալ Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/f6/44/fd/Mutabbal-Mayrig-RestaurantxxrS5Wpvnk689_200x200@2x.webp",
      title: "2400֏",
    },
    {
      id: 7,
      description: "Մուհամարա Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/a5/49/83/Muhamara-Mayrig-RestaurantaoiRvMERSNXdT_200x200@2x.webp",
      title: "3000֏",
    },
    {
      id: 8,
      description: "Սարմա բրնձով Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/a5/69/89/Sarma-with-greens-Mayrig-RestaurantgoJvfzvhLPVuw_200x200@2x.webp",
      title: "2900֏",
    },
    {
      id: 9,
      description: "Ֆիշնա Քուֆթա Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/b1/ee/87/Fishna-Keufteh-Mayrig-RestaurantxDyk5CEeiKyoW_200x200@2x.webp",
      title: "4000֏",
    },
    {
      id: 10,
      description: "Սմբուկով ռուլետներ Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/ff/9c/29/Eggplant-rolls-Mayrig-Restaurant_200x200@2x.webp",
      title: "2700֏",
    },
    {
      id: 12,
      description: "Ոսպով քյուֆթա Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/d7/cc/1e/Lentil-Keufteh-Mayrig-Restaurant_200x200@2x.webp",
      title: "2300֏",
    },

  ]
  const data3 = [
    {
      id: 1,
      description: "Լահմաջուն մինի",
      image: "https://buy.am//media/image/cb/34/44/Lahmajun-mini-5-pcs-Mayrig-Restaurant_200x200@2x.webp",
      title: "1800֏",
    },
    {
      id: 2,
      description: "Քուֆթա բրնձով",
      image: "https://buy.am//media/image/62/5a/c5/Rice-Keufteh-6-pcs-Mayrig-Restaurant_200x200@2x.webp",
      title: "4400֏",
    },
    {
      id: 3,
      description: "Spicy Potatoes Myrik ռեստորան",
      image: "https://buy.am//media/image/04/05/10/Spicy-potato-Mayrig-Restaurant_200x200@2x.webp",
      title: "1900֏",
    },
    {
      id: 4,
      description: "Սուջուխ Ֆհարա Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/27/14/dc/Soujoukh-Fekhara-Mayrig-Restaurant_200x200@2x.webp",
      title: "3800֏",
    },
    {
      id: 5,
      description: "Սու Բորեկ Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/5f/99/36/Sou-Beureg-Mayrig-RestaurantT27YMraP4K7Mw.webp",
      title: "4500֏",
    },
    {
      id: 6,
      description: "Բաստուրմա ձվով Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/af/7f/a1/Basterma-with-eggs-Mayrig-Restaurant_200x200@2x.webp",
      title: "3200֏",
    },
    {
      id: 7,
      description: "Մինի հաց պղպեղով",
      image: "https://buy.am//media/image/8c/bb/27/Bread-with-pepper-4-pcs-Mayrig-Restaurant_200x200@2x.webp",
      title: "1500֏",
    },
    {
      id: 8,
      description: "Խորոված բանջարեղեն Myrik Restaurant",
      image: "https://buy.am//media/image/84/40/af/Grilled-vegetables-Mayrig-Restaurant_200x200@2x.webp",
      title: "2300֏",
    },
    {
      id: 9,
      description: "Խորոված Halloumi Myrik ռեստորան",
      image: "https://buy.am//media/image/88/3b/bc/Grilled-Halloumi-Mayrig-Restaurantw4aNygDFdNjlq_200x200@2x.webp",
      title: "2800֏",
    },
    {
      id: 10,
      description: "Al Borek Myrik ռեստորան",
      image: "https://buy.am//media/image/1e/2f/f8/El-Beureg-Mayrig-RestaurantozPy0SAAVHtbV_200x200@2x.webp",
      title: "3700֏",
    },
  ]
  const data4 = [
    {
      id: 1,
      description: "Մանթի Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/64/06/c1/Mante-Mayrig-RestaurantVvzhLVauNZzpQ_200x200@2x.webp",
      title: "4700֏",
    },
    {
      id: 2,
      description: "Մանթի սպանախով Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/fe/a9/a3/Mante-with-spinach-Mayrig-RestaurantIx8WIRhArfuZY_200x200@2x.webp",
      title: "4700֏",
    },
    {
      id: 3,
      description: "Համեղ Drumstick Myrik ռեստորան",
      image: "https://buy.am//media/image/06/46/0c/Tasty-Shank-Mayrig-Restaurant_200x200@2x.webp",
      title: "18000֏",
    },
    {
      id: 4,
      description: "Մայրիկ քյաբաբ Mayrik Restaurant",
      image: "https://buy.am//media/image/b1/3e/18/Mayrig-Kebab-Mayrig-RestaurantBNrlswcMOizWr_200x200@2x.webp",
      title: "8500֏",
    },
    {
      id: 5,
      description: "Fishna Kebab Mayrik ռեստորան",
      image: "https://buy.am//media/image/28/df/e5/Fishna-Kebab-Mayrig-RestauranttlGyaQycE6x62_200x200@2x.webp",
      title: "7700֏",
    },
    {
      id: 6,
      description: "Խոզի բուդ Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/dd/71/f6/Pork-loin-Mayrig-Restaurant.webp",
      title: "5700֏",
    },
    {
      id: 7,
      description: "Խոզի կողիկներ Myrik Restaurant",
      image: "https://buy.am//media/image/16/dc/03/Pork-ribs-Mayrig-Restaurant5r0XyA55Yd2gD.webp",
      title: "5700֏",
    },
    {
      id: 8,
      description: "Թառափի շաշլիկ Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/5c/25/fd/Sturgeon-barbecue-Mayrig-RestaurantOBqLHUvIKvqtE_200x200@2x.webp",
      title: "6700֏",
    },
    {
      id: 9,
      description: "Տոլմա խաղողի տերեւներով Մայրիկ",
      image: "https://buy.am//media/image/ea/5e/22/Dolma-with-grape-leaves-Mayrig-Restaurant.webp",
      title: "4100֏",
    },
    {
      id: 10,
      description: "Հավի քյաբաբ Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/c4/67/c7/Chicken-Kebab-Mayrig-RestaurantgXOVzT1zqfVS9_200x200@2x.webp",
      title: "6500֏",
    },
  ]
  const data5 = [
    {
      id: 1,
      description: "Պանիր Մաամուլ (3 հատ) Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/7f/e4/f8/Cheese-Maamoul-Mayrig-Restaurant_200x200@2x.webp",
      title: "4000֏",
    },
    {
      id: 2,
      description: "Kaymakle Մայրիկ ռեստորան Աշտա լցոնա",
      image: "https://buy.am//media/image/71/f4/c4/Kaymakleh-Mayrig-RestaurantV5yAVns7xDNVu_200x200@2x.webp",
      title: "3,400֏",
    },
    {
      id: 3,
      description: "Աշտալյե Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/df/12/a4/Ashtalieh-Mayrig-RestaurantccSmrsU0cdHdS_200x200@2x.webp",
      title: "3500֏",
    },
    {
      id: 4,
      description: "Ice Cream Myrick ռեստորանIce Cream Myrick ռեստորան",
      image: "https://buy.am//media/image/04/b5/5d/Ice-cream-Mayrig-Restaurant_200x200@2x.webp",
      title: "2000֏",
    },
    {
      id: 5,
      description: "Մանուշագի Մայրիկ ռեստորան",
      image: "https://buy.am//media/image/e3/c2/db/Manoushagi-Mayrig-Restaurant_200x200@2x.webp",
      title: "3300֏",
    }
  ]
  const data6 = [
    {
      id: 1,
      description: "Քուֆթա մածոնի Մայրիկ ռեստորանով",
      image: "https://buy.am//media/image/f7/d2/d3/Keufteh-with-plain-yogurt-Mayrig-Restaurant_200x200@2x.webp",
      title: "2400֏",
    },
    {
      id: 2,
      description: "Սնկով կրեմով ապուր Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/92/d3/18/Mushroom-cream-soup-Mayrig-Restaurant_200x200@2x.webp",
      title: "2600֏",
    },
    {
      id: 3,
      description: "Հավի ապուր Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/e2/3e/c5/Chicken-soup-Mayrig-Restaurant_200x200@2x.webp",
      title: "2400֏",
    },
    {
      id: 4,
      description: "Minestrone Myrick ռեստորան",
      image: "https://buy.am//media/image/df/fd/da/Minestrone-Mayrig-Restaurant_200x200@2x.webp",
      title: "2000֏",
    },
    {
      id: 5,
      description: "Ոսպով ապուր Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/a1/9a/b8/Lentil-soup-Mayrig-Restaurant_200x200@2x.webp",
      title: "1500֏",
    }
  ]
  const data7 = [
    {
      id: 1,
      description: "Հաց Մայրիկ Ռեստորան",
      image: "https://buy.am//media/image/19/b9/cf/Bread-Mayrig-Restaurant_200x200@2x.webp",
      title: "750֏",
    }
  ]
  return (
    <>
      <h1 className="title text-[black] text-[30px] mt-[30px]">Նախաճաշ</h1>
        <div className="flex flex-wrap w-[1/6]">
          {data.map((el) => (
            <div key={el.id} className="card w-[250px] text-left">
              <img src={el.image} className="image w-[75%] " />
              <p className="card-description text-[black]">{el.description}</p>
              <h2 className="card-title text-[black]">{el.title}</h2>
            </div>
          ))}
        </div>

      <h1 className="title text-[black] mt-[30px] text-[30px] ">Աղցաններ</h1>
      <div className="flex flex-wrap w-[1/6]">
        {data1.map((i) => (
          <div key={i.id} className="card w-[250px] text-left">
            <img src={i.image} className="image w-[75%]" />
            <p className="card-description text-[black]">{i.description}</p>
            <h2 className="card-title text-[black]">{i.title}</h2>
          </div>
        ))}
      </div>
      <h1 className="title text-[black]  mt-[30px] text-[30px] " >Սառը նախուտեստներ</h1>
      <div className="flex flex-wrap w-[1/6]">
        {data2.map((ele) => (
          <div key={ele.id} className="card w-[250px] text-left">
            <img src={ele.image} className="image w-[75%]" />
            <p className="card-description text-[black]">{ele.description}</p>
            <h2 className="card-title text-[black]">{ele.title}</h2>
          </div>
        ))}
      </div>
      <h6 className="title text-[black]  mt-[30px] text-[30px] ">Տաք նախուտեստներ</h6>
      <div className="flex flex-wrap w-[1/6]" >
        {data3.map((ele) => (
          <div key={ele.id} className="card w-[250px] text-left">
            <img src={ele.image} className="image w-[75%] " />
            <p className="card-description text-[black]">{ele.description}</p>
            <h2 className="card-title text-[black]">{ele.title}</h2>
          </div>
        ))}
      </div>
      <h6 className="title text-[black]  mt-[30px] text-[30px]">Հիմնական դասընթացներ</h6>
      <div className="flex flex-wrap w-[1/6]" >
        {data4.map((ele) => (
          <div key={ele.id} className="card w-[250px] text-left">
            <img src={ele.image} className="image w-[75%]" />
            <p className="card-description text-[black]">{ele.description}</p>
            <h2 className="card-title text-[black]">{ele.title}</h2>
          </div>
        ))}
      </div>
      <h6 className="title text-[black]  mt-[30px] text-[30px]">Աղանդներ</h6>
      <div className="flex flex-wrap w-[1/6]" >
        {data5.map((ele) => (
          <div key={ele.id} className="card w-[250px] text-left">
            <img src={ele.image} className="image w-[75%]" />
            <p className="card-description text-[black]">{ele.description}</p>
            <h2 className="card-title text-[black]">{ele.title}</h2>
          </div>
        ))}
      </div><h6 className="title text-[black]  mt-[30px] text-[30px]">Ապուրներ</h6>
      <div className="flex flex-wrap w-[1/6]" >
        {data6.map((ele) => (
          <div key={ele.id} className="card w-[250px] text-left">
            <img src={ele.image} className="image w-[75%]" />
            <p className="card-description text-[black]">{ele.description}</p>
            <h2 className="card-title text-[black]">{ele.title}</h2>
          </div>
        ))}
      </div><h6 className="title text-[black]  mt-[30px] text-[30px]">Հաց</h6>
      <div className="flex flex-wrap w-[1/6]" >
        {data7.map((ele) => (
          <div key={ele.id} className="card w-[250px] text-left">
            <img src={ele.image} className="image w-[75%]" />
            <p className="card-description text-[black]">{ele.description}</p>
            <h2 className="card-title text-[black]">{ele.title}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dishes