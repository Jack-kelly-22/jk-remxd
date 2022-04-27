const bookmarks = [
    
    {link:"https://myportal.calpoly.edu/f/u17l1s6/normal/render.uP", add_date:"1600107213", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADOUlEQVQ4jW3MbUxVdQDH8e//f859gHMvUARKBOJ4DqezbspW6NqKBqmrbGtr5opeteXmbLWVth6wVtnDO9gqqzEb6WZYOpczU3C1VMoRLEy6SOC9wAXuLtzne885/140rq76vfq9+P0+AqDj7X3bhsf/2JPKZG6zbKtIgGHZtksINKVACGELIVJAXJMykudyh9aurnv/01f2n9QBAguh2qxpbi4vKcWTl0+hx0t4MYLL6SSWTCCFxJtvuFOZdJEmZflkaKZpcjZwDEAHULZlSymIRJeYDS8ggGQmjRAC0zQB8BoebNvC7XRjWRZCSjsHWLZplRWX0Na8ifNDv7Bq5e2ksxlcDge6pmMrm7LiUg6fOcn62kYisSihyIKZAzSpmw7dga5pdDz8GFOhacqKSzHceQTmQ7gcDgJzs7z69HNsaFzL8R/Pcuj741YO0KVutzW3cGdVNcP+MYq8Xm4pKCAw9885uBACoOe7b/j42yM0rqrGpTlvAKDMrr5evHkGbpcLb76BJiWxZIJCw0sinSIajxGYDzETnufnkSHuaVhzA5CasGrKK3lk0wPUVVShaxrV5ZVIIbg6NUGB4cGpO5iLhLkyeY1jA2dUKp2yACSA2+GOPfngFmtH61bqK6r47MRRxoNTKKXo/KKbl7oOEEsm8DWsYUfrVtqaW0xNyqUc4JT6+LXp64tKKbz5BrUVVbxz6BOuTk1QUbqSS6Mj9F++CEDGzDIxHQgbngJ/Dlhfu+7K7xP+C/7gFFJKnt2ynXXV9ez6aD931zdx+M0Pad1wHwCjE378wcn+p3yb/8wBL+7cGY8lE91Hz55aSmcyZLJZ8txu7qpvIrgwR13FamruqCSaiPP1wOkQlt3V3t6e5uYMDg46Ht27663uvt7syPiYujQ6rCzLUtdDM+ri6LBajEXVB72fJx7fu3u3Ukos/+Ry8fl82fsbN7574qdz3X0Dp7OVK8qQUlJesoJbvYW89+XBWP/QYGfHva3dQgi1/BP8Kwd6eowffjv/fJGnYE/bxpbSeCrJuV8vjKXNbOe+7c985fP5sjfv/wMAKKW0J9544aG/AsHXdF3MNFTWvH7w5c7L/7f9G4UzXQ12l/mZAAAAAElFTkSuQmCC"},
    {link:"https://cloud.mongodb.com/v2/601d9a0c65a4ca639217c281#clusters", add_date:"1612556150", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVQ4jWWSzUtUURjGf++5R0dzHAwatEmlaOPHKjTRJAL3RRt3Qi2E9m37H5SW07aWQZto0cJapGQgEqS2iKD8QiKzGcevufe8Ld7rzGgPvNxzn/Oc5/04RziPK/2jeD+FhnGgJ2XXETdPkjxnY3WxUS61VWHoAv54BpFHiAMCHCa21xoBDjSAapE485itpYO6QfdYK5Re0+QnCAmgUElgIGsGq/vQFpncRVCN5wgtd9laOnAAuPIsTX6CJAZVOAmQ8/C0zyLnjVOFJIYmP4GvzABE9AzexLmiZU5RSeDJdbiXh64MeAdvf0PG8qEK4obJ5d84lGnrOcVRgP4sTHaCWjdMdlo7RyEVKYgDZdrhGEdD3eA4wJ2LkG+uc/lmuN1he6dQBSe3HHDZ0jTcSyFj3+8nFgJ0ZhrvLC1NC47zUCBWc9rBAjFO/1PjgO0z1gJ8Ltv6WxoAX/bPVSCAbHkC83g3WJtDWwTvdmH5L6ztGLfcBe9307dwel4gCQtC98AIUbRYMxCgnNjQXt0w7v4yfNiD9ihtQ0wXdCSi9GuT9nwB74dqJhkHKxXoy8LXCsz+gA5fn0HkIWiR9ZVnVlO2dw49GcP7a2iqisSe8MIeHCT2L2KHq/EcmntAaSM2g/J2lWzvS6R6CZFhXARe4E8MpQQyEUjafwhFkpaHbH46PO34LK72j6J+CtVx0N50MD8RmSeOX7C59rFR/g9XJMcXmM6rnQAAAABJRU5ErkJggg::"},
    {link:"http://dlinkrouter.local./info/Login.html", add_date:"1609953505"},
    {link:"https://app.haikei.app/", add_date:"1630499572"},
    {link:"https://github.com/MoralisWeb3/react-moralis#resolve-data-with-usemoralisweb3apicall", add_date:"1644119568", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC"},
    {link:"https://dev.to/ynwd/how-to-integrate-tailwind-react-and-webpack-2gdf", add_date:"1646176037", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACMklEQVQ4jZWSv09TURTHz7nvB7wX2w6gTDJISCQ0Qd9rhzJodWokkaSmdQD/AcrUvwQDCyaYyE6NRE20HZoUaEs7tYTaQmlSgoPVqukPWt579zg8Ak108U73fs/nDuecDzqcLvifwwYfRPRPaDC//sAYQ0REHORs9CokIpFzzjk3TdMwDFVVLcsiIkTgnGRZBgDTNEXxEpMkiT0Ph+OfP2Uz6ZcrK6Io6h7944f3mXR6b29X07RX6+uRSKTTaY+Njb2Nbc3NPWF3p6Y8Hs9xtbq8HIlGo/4HD/1+/9Hxcb1ebzS+jY/ffrG4QJxr2v1AIND80WQIcFgqhUOhrVhM1zVJlguFQjgUehYMfimV3m1vT05Ojt685fP5arVadn+fAYAsy4wxy7Qs0+p2u9PT07lc3v/oMQDkc3lFUbxe76xvtlAs/v7183JKnHMiIiCG2O/3T0/r5+ddUZKKBwfVk5PI0tLExJ14PA4AIhEZhgEAqqoKojCsKJXKUTAYBACH09VsNjPpzOLiQqfTyaSzTJAYMrw3M5NKpebnnyaTyV6vp+taKpXa2dl1u93ErXgiDgDlcqVcKSvKsDAyMoqIRPR6Y2N1da3VarlcLkDs9XqJRKLxvXF29lUQhDebm6XDwyFZxqFh5eLCIG4B0A2H0zCMfr9vb1VRVXtlnXZblCRFUYgIHU4XQwREu3XbDiJCRHsSiMgYIyK7KgIAJwKiK3lsc66Es9FrlwatHDTv78S+/wF72SshkV+RyAAAAABJRU5ErkJggg::"},
    {link:"https://www.defibasket.org/", add_date:"1646209341", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC9ElEQVQ4jW1TTWhcVRT+zr333XvfzJvJDLUmKW00lWkhBSNtCDIIKqJi3Lh5WRSKm4KKVkR3xdJZtbZdNCQgCCpqVjLgzmVBUDoBXYko2IKFqJS0Nmkz8968n3uPC5MYjB8cOIvzfRzO+T7CNpgJRAwALy3eMGK00TbGHwlCiMDgJjX5+vL02OC/s7TFJoD4ROfPSu1Q/Zyx7o1qozpiIwnh+xDUz63BamD5k7X01kK33U63ObTdzFx6cFRH+NRGulAq/TZQRWoMJrXxc9VGeEAiQbSvCldsrHidxUut1u9gJgKAqcv9saric0rTV723omvYhfjr38bC0HRspF6TlA7rD9eszzZWBkX6/IdTUwOFDgvDm7N5oi58/27lD4DpmQ4kAHxzHr5LdBvA66e/W81tMzqTbmwMG+MjTwYDdwZEF2mqsxblOgxvnq3dwf+hwwLnwXG3Z/cfPvijrorHrPEsKVvNwuSYWAv3U02Lt2cW8x+OX+m/s1eAfNztiu58OwX5L7WtkMtzTwKHKhS2xQSlc8pU3icEJ0jZq9OXktl/P/MPujufxs9lUTADrLQm4bklSLh9vnTeZYOMhPAC/iiYCTHEziERA8xEQvDu5ZwHROnwC1zGAEkSEBD+ORAxYgAxS8QsuzEAIs4SPC2VJAKozHMm0A1xP73bY+Anoa30w2EplDn5xAf9k5gnh+5WEbnZqw9eUVLOl+nAS2MEe7+ayPQ6AcDxy5tvUmCWuCwcSanAHsx+mYBrpZPCl3jqyLHNuQOPZqMkyrw5VjfF4N7ZC5OtiwpgGvDdL2qOXxZSvuDKctOzCJWtnnJFcUrrIh8/nBQPjeeyzH1RH22YZH19hUeSxS0nbuVgIZ2wqvxcWT3jy9wK4cswcn81mnlQiXxTaRlEzRA+X+85l88vTe+y8o7IR1yp6/571vpXjS4nTKQDFThIpM6GuKUMf5zczxY+e3ZyuCtMe+P8+JXb1YOP2Hags5Y1HiYSv3LCveUX98b5b2q6XKUsPSF6AAAAAElFTkSuQmCC"},
    {link:"chrome://settings/", add_date:"1646248978", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIcSURBVHgBbVPBchJBEO1uiLnuHwh/sN6tCvkC8R7i4A9IFYJH9BijJX4BA1peU3wBm4vX7B9kj95cjxbLdF7vsoQkTNXUTPd0z7z3uqdBB4Zzw04cv4zS9PefQ/b+4MeJG5YJnB2Yuai8MH/gcLsNyUTptfeXaZ0j9eb87XgSWFYIQJC0lShF4hXmipW8+Uj1OjDd9Nx48OQCHHYtcO4v+95fZA2VvirlmCmTfDLfwn9xuDhh1jdPKPTcyDHTN9F12/tpTge1+dCq6LBbzD7Pzdd0bhARHXVLrkRR4OMTbJfOjeKCyZVBKlNDUFARC0CLKuMcZ5Jwrz9aMWlMyrnB+wEKZ27cFdYrVU0MJJB1gobTn/5rcu7ee/hOiDVS4rRZJlPDLfzFcicM68T0AOd+KbAbThnVwTYxHcx35oZ4hGcQkaOgxb+HbOEjut7pSwIhqbUf0USZsURYNReRDnoA9iY1AZU0A+x3EC0h+p+jdIYoqYQsNWsFAQ3VnAHvI1XwqGqedZvoOLL60/ZV06JBjX512dFN7Qe073xfolFsTQIFuotZpQd4dgJJ/mvbeWZL2WzStqqUetUXFKzWXVmdXPHcZM9ondW2VcFiAhVuJ/hONuLnKGNmzWK2NRbg3mL+tZdr/hYDyq/u83YUyi5bbblNcTLAuizbyxKYPWkASrZPdlpTePAb65dRgVJUCLr9jRBOy91caDPdb/U77a0SPO98+EMAAAAASUVORK5CYII:"},
    {link:"https://github.com/ChainDev931105/p-NestedAMM/blob/main/SmartContracts/contracts/AMM.sol", add_date:"1646369856", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jY3Tv2qVQRAF8PPdP7k3itoE7SOIKFZiDAZsfBJFfBDRQjBFGkFiJ/gKerGwsRAsvaKFFhYWgo3GxEA0P4vMhTUk4sDy7c6cMztzZr9kn2EFD/Eem7Xele/yfnxLnMP9Isxst9bMfhRmriX2MMLE/9ukOL1ZktUKvMANvMIGpnhT+9e4jmeFvTcjL2ELv7BevjFOYYgBFjBfsbXCbuLiIMnNJPPV0Tb6XddtJ9luJPqKDv0kO0n6SY4kuZVSeBc/cabRpWt06mZnLJaYu5im+oPPGB06pr9Fn1aCjV6SYcWOJhm3Nx9A7pKMkywk6ZIMe0k+JJHkRJLlruugf0ALg67rJFlJcrI4H4NHVc53fMLZf1RwDm/xu9peD5brcBuPa/8cSw3xAp7gW8V3apSXZoC1quI87uApTjcJFptXuFXf1VbVPl7WSK+1txdmjC9Nkom9f6fXggZ40ICON7Fj1feOvWc/zGGGK9XGqPGNcBdX9+P/AO1cPr7g2LjWAAAAAElFTkSuQmCC"},
    {link:"https://github.com/Ubeswap/token-math/tree/main/src", add_date:"1648676532", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC"},
    {link:"https://observablehq.com/@d3/smooth-zooming", add_date:"1648678090", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACzklEQVQ4jX2TsW8cVRDGv5l9+3Zz92Q3IFupkIhALlDaSCQSKVwgKojuD4DCOBKchHS2N1dt5dytVxZsmuACGqgOERpoUgSU8BdYiikMoopsQZO7vTu/3bdvKGwLSyT8pNFoNPpGmhl9hFMIgABAlmU3iOhDEXnHe/8aADDzn0T0MxF91ev1nlzU0FmBtbW11srKysA597HWWosITk5OngNAFEWLzAxrbRWG4ZcHBwfJ3t7e7HwKp2kaG2N+0FqvzudzKKUOReSOtfZxXddijLkO4K73/o04jlFV1cOjo6P38zyfKwDeGDOIomh1MplUURTN6rr+IEmSffzL99vb279prX+dTqctY8zq0tLSAMCnPBwOr4nI7bIsbavV0s65b5Ik2S+KIjpXF0UR9fv9p865b+M41mVZWgDrw+HwmgKwzsxKRHzTNJ6IfgRA3W7X7u7uXgKAbrc7B0DM/JP3/raIEDMr7/06A7jpnBMiCquqstba3wFIlmW3RGRfRPazLLsFQJxzh3VdWyIKnXMC4CY3TXO5aRphZiKi2XQ6/bvT6WgAXwB4/Sw+73Q6ejwe/wVgxszUNI00TXOZ8XJERP6nfQoHQfAsCALy3guA1sLCwquj0agSkc+Y+Q8iOiSi7mg0qtrt9isi0vLeSxAEFATBMwbwSClFIlKHYRgppa4AoK2tre/G4/Fb4/H46sbGxgMAFIbhFa11JCK1UooAPGIA9733joiEmVlE3gUgRVFEaZrO0jSdnb1UmPk9Pj2WeO8dgPsEADs7O/fiOP5kMplUWutZVVVv9/v9pxd3HQwGV5VSv9R1fckYo62193q9XlcB4OPj42R5eflNY8zqfD7XWusHeZ7fKcvySRiGFEXRDSK665xbbLfbsNY+LMsyAcAvNZP3Htba5wAQx/EiANR1XSml/mOm8ywAkOf5dRH56EV2FpGvNzc3H1/U/AMCd3nJEjluxQAAAABJRU5ErkJggg::"},
    {link:"https://github.com/nateawelch/CompoundPool/blob/master/contracts/CompoundPool.sol", add_date:"1648708051", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC"},
    {link:"https://github.com/celo-tracker/celo-tracker-contracts/blob/main/contracts/test/revo/UniswapRouter.sol", add_date:"1650008999", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC"},
    {link:"https://github.com/Coldice54/CSC430Asgn3", add_date:"1650395622", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC"},
    
];


export default function Bookmarks(){
    return (
        <div>
            <h1>Bookmarks</h1>
            {bookmarks.map((bookmark, index) => {
                return (
                    <div key={index} className="bg-white rounded-lg w-10" >
                        <img src={bookmark.icon}></img>
                        <a href={bookmark.link}>{bookmark.link}</a>
                    </div>
                )})}
                </div>
    )
}