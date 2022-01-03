import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tache : any = {
    titre:"",
    descrption:"",
    fait: false
    
  };

  /* la liste des taches à faire*/
  todoList= 
    [
      {
        id : 1,
        titre : 'passer test altran',
        fait : false,
        description : 'passer le test reçu par mail'
      },
      {
        id : 2,
        titre : 'acheter cadeaux Noel',
        fait: false,
        description : 'aller au centre commercial avant le 24/12'
      },
      {
        id: 3,
        titre : 'reserver retaurant',
        fait:false,
        description : 'chercher numéro sur google et appeler restaurant'
      },
      {
        id : 4,
        titre : 'séance sport',
        fait:false,
        description : "reserver un créneau pour ma séance de sport depuis l'application mobile"
      }
    ]


/*Envoie la tache en tete de liste*/
    toTheTopList(tache : any){

        this.todoList.forEach(data =>{
          data.id ++;
        })
          tache.id = 1;
        this.todoList.sort((a,b)=>{return a.id - b.id });

    }

    /*Envoie la tache à la fin de la liste*/
    toTheBottomList(tache : any)
    {
  
      let max =0;
      this.todoList.forEach(data=>
        {
          if(data.id>tache.id)
          {
            data.id--;
            if(data.id>max){
              max = data.id;
            }
          }

        });
        
        tache.id=max+1;
        this.todoList.sort((a,b)=>{return a.id - b.id });
        

    }

    /*Ajoute la nouvelle tache récuperé du formulaire d'ajout dans la liste*/
    envoiTache(tache : any)
    {

      if(! this.todoList.includes(tache))
      {
        this.todoList.push(tache);
        this.toTheTopList(tache);
      }
      else
      {
        console.log("la tache existe deja");
        alert("la tache existe deja");
      }

  
    }

    /*Afficher la tache en détails */
    displayTache(tache:any)
    {
      this.tache.description = tache.description;
      this.tache.titre = tache.titre;
      this.tache.fait= tache.fait
    }

    /* Change l'etat de la tache et deplace la tache dans la liste selon son etat*/
    changeEtatTache(tache : any)
    {
      tache.fait = !tache.fait;
      if(tache.fait=== true)
      {
        this.toTheBottomList(tache);
      }
      else
      this.toTheTopList(tache);

    }

    /*supprimer une tache*/
    suppTache(tache : any)
    {

     this.todoList.splice(tache.id-1,1);

      this.todoList.forEach(data => 
        {
          if(data.id>tache.id)
          {
            data.id--;
          }
        })
      console.log(this.todoList);
    }

    displayConsole()
    {
      console.log(this.todoList);
    }
  }
