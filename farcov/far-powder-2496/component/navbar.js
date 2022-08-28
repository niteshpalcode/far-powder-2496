function footer(){
    return `  <div id="footer">

    <div id="row1"  >

        <h4>Info</h4>
        <ul class="footer-block__details-content list-unstyled">
            <li><a href="" class="link link--text list-menu__item list-menu__item--link">Search</a></li>
            <li><a href="" class="link link--text list-menu__item list-menu__item--link">Terms of Service</a></li>
            <li><a href="" class="link link--text list-menu__item list-menu__item--link">Refund policy</a></li>
            <li><a href="" class="link link--text list-menu__item list-menu__item--link">Wholesale</a></li>
            <li><a href="" class="link link--text list-menu__item list-menu__item--link">Wholesale Signup Form</a></li>
            <li><a href="" class="link link--text list-menu__item list-menu__item--link">Shipping</a></li>
        </ul>
  
        <div class="footer-block__newsletter">
  
            <h4 class="footer-block__heading">Subscribe to our emails</h4>
            <input type="text"   id="email" placeholder="Email" >
            
  
        </div>
       </div>
       <div id="row2">
        <h4 class="footer-block__heading">Contact Us!</h4>
        <div class="footer-block__details-content rte">
  
            <p>Need to talk? Reach us via email, phone or text!</p>
            <p><strong>Email: Customerservice@Lovoda.com</strong></p>
            <p><strong>Phone: (443) 500-1200</strong></p>
            <p>**Msg &data rates may apply</p>
        </div>
  
        <div id="logo">
            <img id="fb" src="data:image/jpeg;base64,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" alt="">
             <img id="pin" src="data:image/png;base64,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" alt="">
              <img id="insta" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAYFBMVEX///8AAADNzc3o6Oj29vbBwcEmJibs7Oz7+/vU1NRISEjf39/z8/MeHh6bm5s7Oztzc3NhYWGMjIwNDQ2CgoKsrKxYWFgvLy96enpnZ2dOTk64uLgWFhaSkpKioqI0NDTNyr3PAAAEiUlEQVRogcVb6YKCIBDGs8NKyuyy8v3fcmvbcgYHBBaa719ifsrcMAihR1W0+0NdNokvmrI+7NuiMnDoMOtk70+svEYvu5kT++J0DMT9xvG0sGZPt4HJX9imdt9eR2F/op6eg9kpGvsTpwk9KELLXcWxMNFvIrM/sdHTn79AnyRnDfvq8hX6JLmsSPrll+iTZEm9APX1x+2uK1J/FN1uS2n0xUb21/tiblJWS8wXm+vo2SMdGGm+pbeyw9ijKlZQqBKy99Z2WKjahfzATBHSLcTEY8xvimpBT4id7troo7xRrBHLaRhZoIHSJ1+wQVUinkHEKOKVpHcIghV6gfp9OUWTH+vrn6iQCN4WhowjjuzfQHa2fV1D0r+F5cvu+/NpA4wZWcHrOlT+ZVDDW8m/xx4+Qp1DP/BrAsj2g7qd2SDt60esUNl+fUA3lkgY5NCsrp8ZgNr2fCsJfof0+WIHRZ0s35fhBMjH7x68ZEj6TClfPt8GomH/MElw2z0kf4fpk9174D5caypkkUG1b6fwf3QL2nsh2uHHMajxSYX/Y9pzYHCt2BNvaIs8q6oqy+nBvcI/PB1YwF4cCAlNY75o5WBetWzHqZqa0gyeFUjmAGNfZ/vZqewTFb1M8URkONwD5QKaWQsQEu1Cz2qjS9SXGxS6sQKClBfMTCmA+Vl5n5tpVaKB4StHSR0I68ADNQLcYsHfJlNowUwNL9DAZ0MP6MRf2VRol+FLV28bkBl8jC9/Ma4jKFyBHlWt3J7vSkrlyW9fnBtKbH9+l4WRk/FJXvxuawO6Gt+bn/7667pc00phmgEPfkL2a9mlD+9fVWkn1+Nhgw6486u+/BE48M2pGm1M3tSZv1LneDOOebk6RVdtIePMr7idc0belSkqSixy+PErTlefpd3xja3mNld+/FSTlaT41jD8eOHAXJ5W6F5NMefGv0IBdypGoBlo6FLejR/p9XSGjnSAdgJO/DnMdoxu9Q/QCpZkburEjyaUNjyMbFJcTvwwjZ+Iq3+AApP/5c9hpqvJ9NW/gH/01F9c+GGxtLeix5UHVdK58LcT4xTg8ykf6MIPxL+2pBcChGNKAVz4a/OjaICXrolhF34wbFue4dL/f/y5eVgDSEAYgAM/cCb6fGIEmK8QLsuBH8Qzh4VZuMxK/MuPv7Rxvi9koKgOxs/y/dzy59Z/bvtn93/c/p87/nHHf+78hzv/Y89/ufN/7vqHvf7jrn/Z63/29Q/u9R/29S/u9T/29U/29V/29W/29X/2/Q+v/Z+g/M77X6H5Hff/rPjj7X/a8DcR93+1QPu/0fa/9UD73377//lo/9+WXCj7/9H6H/RA/Q/R+j+0wP0f0fpftMD9L9H6f7TA/T/R+p+0wP1P8fq/NFD7v6L1v2mg9r/F6/8jAbXv1QMcr/+RwLj/MWr/5whE/yd3/yt7/y93/zN7/zd3/zt7///4/ENoT5wazz+wn/+Iev7lbnH+hf38D/v5J+7zX4L7/JtgP//Hfv6R/fyn4D7/+gTv+d/fOWA9//xE4PPfhdv57xe+cf79BwQwR12GuPxKAAAAAElFTkSuQmCC" alt="">
              <img id="tiktok" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sIxJJ896ujIsl-KXmeRcVIkQKQCJV4FzuA&usqp=CAU" alt="">
       
            </div>
       </div>

 </div>



 <div id="footer_end">
    <img    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWAgV7JYmSIu0sXH7yFEaHeuF7BLs68ukAPsI_CfEfPPV9p-Bx1TjcxP1Uyl3e-FkO74&usqp=CAU" alt="">
    <img src="data:image/png;base64,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" alt="">
    <img src="data:image/png;base64,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" alt="">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABDlBMVEX////0gSAjHyAAAACzsrLp6enfdyAVDxATDA6KiYmAfn8UGR+GVDL7hB8EAAC3trbfZygxLS7zeADlcCXjbCYZFBVwbm7sfiPodiTvhCLxiCH0jCDf398fGhvhaifLyspoZmfz8/PqeiSqqakMAAXR0dF9e3z96t1FQkOWlZUnIySjoqJZV1g5NjePjo7b29v1hgD+9/HdXhbcVwBJR0dfXV7vfQD3ok/83cn1jj/71b34sID6x6f5u5P97eL2l1L0zLzutZ/jfEvmiV7xw7DrooLgbzfkahfqjlvolXH33NHlawDsqIv2s3z4snH2v5iJdmv8kT73pGr3qHH2lErlwqzjp37hikvebgB7TTC2DOw8AAAKBklEQVR4nO2d/V/aSBrAQwYukT3DYhusSgoRBORFjW9rLdDttqt7dXe9bffu9v7/f+TmPTNJCKgoJPd8f1KSTOY788wzMwkfNQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTFnNMyHJRvHMPt+KX84pctwyqvepw8Kxs2GGYdMMw+YJh9wDD7gGH2AcPsA4bZBwyzDxhmHzDMPmCYfcAw+4Bh9gHD7AOG2QcMsw8YZh8wzD5gmH3A8AmQ7yH5iUeC7o+Y6fPcllGSP2mGBxVJ4zhWOfYlsXpYSKvWq46GG5WEG/iVWrWNELKrnejh6cefTs9OMWennz4H4tMGvWsxdtN6kX5e1yrHKJbkcVblA3l16agxaCQZdpDDId8H6x0daDfzyFEkKlyqIcfyPM+1EeqUtBONeg0hyzMJnoXsI6XeXz6dnX4veHt69jN3LNJbo0HU8ILeFOESyrJyoo6kKhWtyqMjVpPDYq24kWRYtkwFz0bVlnKzKqmzww0bSDnXRodqrTpIK8dEYTf+rPhxx4/siElK96oRwRIiBVg1WlPTjBdbQZEqd8hlg0r/oOXPNSRXoOpxoqFeML5bT5523E+sCmF6o/t9/xZz9okeO6JXoYahccg+PV7QkFSQ1GTQagyEVbohcZSBoxiWeLluG4cqvZvsxAbyxKWu5Xqq4ZezuN/bt69vbwJZpNvUDfu0Z8+NeYau64rb2uTs1mAghkaCoUu/ldl2RUGi8ophkzUFGg4qlTKOSWsYCnI9B/VqndoItT1hOD2N6719jbm9IYcv6A2RlmtYaagYGrrKF0cVw06t2UMOk2SnS+KGbhOn+Xpj0GzzRhO9GBryLrR5SDWRKUoQneuMeL/5rb7NDZP6j/Lq9hdp09ZyDbc2pKF7oXwX1heGHrt/hfa46Y3mGdb4b/4GDzh0HDFkDefIBFKTSbfn6v1O6DDDf5zO8MPcfRbla7mGtZd9pBg2DR3V0PA9Nirq6hkphjhpWGqjhIY8KxgxWqwLI/liQMJGGYRRP6KIh+KgHb2W55nSooZG0VHH/QKGRsn2wsgODTdmGfLMEkmIBgmnn1L8Xr25m+CzWK5Rbk+jTkgtYugnRHq6IR8crIRoH7Zj03OLNqGdtAoUXZjoh/kLn9Ox9FzD80xjcUODhbU2O88xNJpsrB9ohiwYTHQUuV3Pm9G3hvHradTvteL35s3dNR4UkR6geUYOzMX70FHXKXMNj8NWieVSs20O1OTOyrc3jARuUv329wvvRQvJVFjSq7uIod7rixkyL3doJM2HptdGF2FxLMWiYyNOcJbo94r77e9vFwyyOJUBY4g80w5nbnLD3oakHDfkQaTNqXMN6Wc0VBRD3xErCDwF90Ursyq5CYJ4GM70I4Lb29tb5DSaTS1eAZpnrE5YU9qmtgRFDUtDW71+UUOew319XVqvhmsoD5msH2mm8HpGAp9PQ79ogBK/7e3LrrRgfcAjTs5tsVWbJQ1Ns9GoHF4gPhnrO525hhVHXKXtLYyasoHwWM6pUcPzJMOPp+l+2zvUsK4MPZpnXLkcTDdEyLH5MjOyaFvY0I8aGvVOWy6yWVrtpBjepvvtMENj6Ipcw/KMMnlzQ09iK4ahtj7dL2KYHKXc/hyJhiX5heUCfVXI+Xwb93uj+AnDhsw1dFB7nlpTcqg/klTjhu3YZnwBw6aclOKGuKU3ePCT4c0aw0l6NvPlLKEDtxXB3Ut2IksvNf5DW5m7U2YL3CY0mtotI85cQypAC04yxGl1SMcjSWdJsxEnOEtMoNJvd3ePnXjIQkaUpbRWmmHfVzaSDzSshGM/2ZB/TirDZvwwv6vcpPvt7v3GG4xvW2joaFVJM/TE3ithwTjPcBTOobMM+Ugt8TwRmXA5v94mBOiOFNw9ueIn1mgZVVOMxwUNjY4dyUwLGh6y9f6FkWIYTlyVxCcRlOldmt/e3p448SBMHXrSmmPIHmWZ7QdmGv5Mgk27quG5sjQryhmTpQcz9kyQHPrlVg9Q3e9kLE8ehVOQNrPNM2RN48ZSeaoh39DabGQphkNH2YqzRw0Wic0ibxFdsUxqOr2L++1wP6ULxRaMFhmpabohj1MnuvBPMWycs/p6fSNieG6bVk+MNmblsjQ25I+ommGwlIZscEzuZIDG/E6ulSqJMI1sUuYaigiK5PIEw+EBWeXV+Bxjek4pYtij97IOyef+Ie82NhX57KEAXo/XKrQJDsrI5cP/XdxPCP6uVqnDl4Ox9SWpDKmcoBQx5EM4MiHPeJqIV3l8OHhyNyQNeUfZyBuO+KKGLaEMsrLk1+FSnH4VkdUrNwySEgwV/EGr0jF/BDrUPhV7i8SniXzpU24r4ZRiqGH35eJeGvp9vsj15GPYMEvXLVde7Hnawel2IcEvKogHwYxoi1Qtbiji9Ei/Ls0QB1t4qrLHt93IzZQh45+HC/KIfvDnZcwvEqKGqHXsFcYihgcJz/pmG3oWQk11v67ugHvqgtdDek5ouY6nHQ7n0PvLy4jf3rURgwRb7DnXIobGBo1Tz9ZWe9rbNYVRp6IPWZt+zOeolnh/5tmop7+FwwyqyLFc8u7NctC5Oq0Fv12ehHonJ/dxP1pPL7YyKsf+HAQzpMiz+DhVtuGaoa89MI/i60cqnZ5nO1ZvI+ZHqLfKF+ej0bDWii4ygvEPRA2z93tC/xFKjhl/MR3/0xakKn6dEp7Fflfe7z7tLbef/BZ7LtMrTDD/vGUA31TIPv/M+d826f7x9+9ybTjZ2sy14dXOViHPhsHXrUIhz4bjrc1Cng2770gH5tcweM/98mo43pKCuTS83gn98mgoB2BODadfdb+8GeIEs1nIsSH2i3Zgvgzvk/xyZDi+TPTLjeG4MMMvJ4bjzZl+uTBM9cuB4f2s8ZcPw2Ayzy/bhsEkeX7Ii+E0cX7Pj+HV163LRfyyanj9Lr7+zJFhcD97es+D4aLDL6uGVx8e6Jctw2C8s/jwy6Bh96HhmTHD6w+Lzg6ZNJxONh8RntkxxJP7o8IzI4ZTvLZ+dPdlwPD64ZNDlgxJ8nxa9621YXD/x2OTZyYMlxGda2x49W0p0bmuhlfvC8vUWzfD7qSwpMG3lobT+3fLG3zrZzjFqfM59NbEsPtMvbcmht3JzjPqrdyQZM5n1VupYTDGe4alZ861MaRDb7nz3hoZBlfvn3nordSwO/7wIrG5GsPg+tvOS8XmCgyvJi828lZgiEPz8gVH3gsbTsffLlfTeS9h2B1/K6zU7lkNu+Ovmyu3ey7D4Gry59Za2BGWbYgDE++DVpVVkliiYXC9Tl0nWY7h9HryobBeXSd5siGWw3uE9es6yVMMRc+trRyFGD7i/3J/+de///MX5m/rz/5/v/s/+N/qK/739c/PE9IMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOSO/wGM7GdEyllRIQAAAABJRU5ErkJggg==" alt="">
    <img src="data:image/png;base64,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" alt="">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC" alt="">
     <img src="data:image/png;base64,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" alt="">
      <img src="https://cdn.shopify.com/s/files/1/0059/2435/6185/files/sp_pay_480x480.png?v=1623658014" alt="">
      <img src="https://cdn.iconscout.com/icon/free/png-64/v-characters-character-alphabet-letter-36037.png" alt="">
       <img src="data:image/png;base64,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" alt="">
    </div>
    <p id="shopify">© 2022, Lovoda Powered by Shopify</p>`
}



function navbar(){
  return ` <div id="top-sec">
  <p>Free Shipping on Orders Over $75 and Free Returns (US ONLY)</p>
</div>

<div id="search-div">

  <input type="text " id="search-box" placeholder="Search">
  <i id="slideicon" class="material-icons">close</i>
</div>

<div id="navbar">
  <div id="new">
     <img id="lavoda"  src="data:image/png;base64,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" alt="">
    <p><a id="hom" href="">Home</a></p>
     <p>New</p>
     <p>Shop All</p>
     <p>Earrings</p>
     <p>Necklace</p>
     <p>Bracelets</p>
     <p>Rings</p>
     <p>Shop Social</p>
  </div>
  
  <div id="icon">
      <i id="srch"  class="material-icons">search</i>
       <a href="./login.html"><span class="material-icons">person</span></a>
       <a href=""><span class="material-icons">local_mall</span></a>
  </div>
</div>`
}

export {footer,navbar}