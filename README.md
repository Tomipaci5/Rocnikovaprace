# Rocnikovaprace

Ročníkový projekt
Tomáš Jakub, T3A

Mým cílem bylo vytvořit webovou stránku, na které se budou moct hrát různé mini hry. Pro začátek jsem vybral piškvorky a šibenici. Stránku plánuji rozšiřovat a přidávat další mini hry, jako například Lodě a další.

Při psaní HTML a CSS souborů jsem neměl žádné potíže, protože jsem pochytal dostatečné informace z hodin paní Skalové. Poté jsem se dostal do bodu, kdy jsem musel napsat skript, abych zajistil funkčnost miniher. Tam jsem se dostal do tuhého, funkce jako jsou: checkGameStatus(), updateAvailableLetters() a createAlphabet() mi dělaly velký problém, protože jsem teprve nedávno okusil krásu scriptování v JavaScriptu.

Dal jsem šanci AI, které bylo schopné něco vyprodukovat, ale nebylo to ideální. Naštěstí jsem měl eso v rukávu. Tím esem byl Matěj Vít, který se ve scriptování vyzná jako Řekové ve financích.

Samozřejmě si dělám srandu. Díky jeho schopnostem a laskavosti jsme spolu dokázali sestavit správný kód, který mi zaručil funkčnost. Za což mu dlužím svůj život, protože bez něj bych nebyl schopen realizovat svou vizi. A tímto mu chci poděkovat a doufám, že i kdyby to mělo zhoršit moji známku, tak to minimálně u vás bude znamenat malé plus pro Matěje.

Také mi vysvětlil, jak funkce fungují, a předal mi vědomosti ohledně scriptování.

Stručné popisování funkcí v JavaScriptu u hry Hangman:

startGame():
Funkce spustí novou hru, tak že vybere náhodné slovo ze seznamu let words a resetuje proměnné.

updateWordDisplay():
Funkce má za úkol zobrazit podtržítka za neuhádnutá písmena a zobrazovat uhodnutá písmena. Díky tomu je každé správně uhodnuté písmeno správně zařazeno.

updateAvailableLetters():
Zobrazuje seznam písmen, která nebyla použita, a zároveň filtruje písmena, která byla uhodnuta, tak aby hráč mohl vědět, která písmena použil a jaká mu zbývají.

createAlphabet():
Tato funkce vytvoří tlačítko pro každé písmeno abecedy, aby mohla být použita k hraní. Každé tlačítko má přiřazenou funkci, která se aktivuje při stisknutí.

guessLetter(guessedLetter):
Tato funkce má za úkol sledovat, zda je stisknuté písmeno ve slově; pokud není, sníží počet pokusů.

updateAttemptsDisplay():
Funkce má za úkol aktualizovat počet pokusů na stránce.

disableLetterButton(letter):
Po stisknutí písmena funkce zakáže opakované stisknutí a zajistí tím, aby písmeno mohlo být stisknuto pouze jednou.

checkGameStatus():
Funkce kontroluje, zda je slovo uhodnuto, nebo jestli došly pokusy. Pokud je hra u konce, zobrazí zprávu o výhře nebo prohře.

resetGame():
Funkce resetuje hru, vybere náhodné slovo ze seznamu, resetuje pokusy a funkčnost klávesnice.

giveHint():
Funkce poskytne nápovědu, tak že zobrazí jedno písmeno a zajistí, že další nápověda už nebude moct být použita.

Stručné popisování funkcí u piškvorek

makeMove(index):
Funkce umožňuje provést tah hráče X na herní desce, pokud dané pole již není obsazeno. Po provedení tahu zkontroluje, zda hra má nebo nemá být ukončena, a dá prostor počítači na tah.

computerMove():
Simuluje tah počítače a vybere náhodné pole, kde umístí symbol O. Zkontroluje výsledek a přepne na tah hráče.

checkResult():
Kontroluje všechny výherní pozice (řádky, sloupce a diagonály). Pokud nějaký z hráčů vyhraje, ukončí hru a oznámí vítěze, případně remízu.

resetGame():
Funkce resetuje herní desku, vymaže všechny symboly na polích, obnoví stav hry a nastaví hráče zpět na 'X'. Také resetuje text s výsledkem a připraví hru na nový zápas.

Tento projekt mi dal celkově dost zabrat, protože jsem nebyl znalý v JavaScriptu, jak už jsem řekl. Matěj Vít i trochu ChatGPT mi zachránili život. Nabral jsem nové zkušenosti a rozhodně ve vývoji stránky hodlám pokračovat. Třeba někdy bude i online.
