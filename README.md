## Formel-1 Reaktionstest

In Zuge dieser Aufgabe wirst du einen Reaktionstest
programmieren, der an den Ampelstart von Formel-1 Rennen angelehnt ist. 
Im Angular-Projekt ist bereits das Grundgerüst für die darzustellende Ampel
vorbereitet. Du musst nur zu den richtigen Zeitpunkten die CSS-Klasse „on“ 
zu dem div mit der CSS-Klasse „light-strip“ hinzufügen, um die Ampel einzuschalten.

## 1. Der Reaktionstest						
Der Reaktionstest hat folgende Zustände:
-	Zustand 0: Alle Ampel sind ausgeschalten. Mit einem Button-Klick auf „Start“, wird in den nächsten Zustand gewechselt.
-	Zustand 1: Button „Start“ wird ausgeblendet. Erste Ampel (ganz links) wird eingeschalten. Jede Sekunde wird eine zusätzliche Ampel eingeschalten. Nachdem alle Ampel eingeschalten wurden, wird automatisch in den nächsten Zustand gewechselt.
-	Zustand 2: Nach einer zufälligen Zeit zwischen 1 und 3 Sekunden wird automatisch in den nächsten Zustand gewechselt (Tipp: Math.random() liefert eine Zufallszahl zwischen 0 und 1)
-	Zustand 3: Alle Ampeln werden ausgeschalten. Der Button „Drive“ erscheint. Jetzt startet der Reaktionstest. Der User sollte so schnell wie möglich auf den Button „Drive“ klicken, damit in den nächsten Zustand gewechselt wird.
-	Zustand 4: Der Button „Drive“ wird ausgeblendet und das Ergebnis des Reaktionstests (Zeit zwischen Wechsel in Zustand 3 und Klick auf „Drive“) wird im Format 0.000 (eine Stelle Sekunde und mit Punkt getrennt die Millisekunden) angezeigt. Durch Klick auf „Restart“ kann der Reaktionstest neu gestartet wird.

_Tipp_: Damit du die Oberfläche schneller testen kannst, kannst du die Ampelwechsel temporär auf 1ms statt 1s stellen.

**Bonus**: Blende den Button „Drive“ bereits auf Zustand 1 ein und werte frühere Klicks auf den Button als „Jump Start“.

## 2. Die Ergebnistabelle							
Die erstellte Oberfläche soll wie folgt erweitert werden:
-	Im Zustand 0 soll zusätzlich ein Eingabefeld für einen Namen angezeigt werden.
-	Sobald der User auf „Drive“ klickt, soll das Ergebnis in einem Array gespeichert werden.
-	Alle gespeicherten Ergebnisse sollen in tabellarischer Form ausgegeben werden (Platzierung, Name, Ergebnis).
-	Die Ergebnistabelle soll sortiert sein (ganz oben die beste Reaktionszeit).
-	Das zuletzt hinzugefügte Ergebnis soll in der Tabelle hervorgehoben werden


