PROBLEMA : 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

SOLUZIONE :

- Creo un array di cinque elementi
- Con una funzione di generazione randomica dei numeri, credo i cinque numeri
- Inserisco questi cinque numeri nell'array
- Con la funzione timing di JS faccio partire un timer di 30 secondi 
- Allo scadere dei 30 secondi, sfruttando CSS, faccio sparire a schermo i cinqune numeri
- creo 5 promt, prendo in input e salvo in un altro array i cinqe numeri 
- Faccio il confronto dei due array 
 SE: 
    - i numeri corrispondono, esito positivo 
ALTRIMENTI : 
    - i numeri non corrispondono, esito negativo 


UPDATE :
 Ho implementato un ciclo while per evitare che vengano proposti due numeri uguali 