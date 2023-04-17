//wir schreiben ein porgramm zum anzeigen von tabellen un der konsole

// wir benötigen eine klasse doe doe komplette app beinhaltet
/**
* @class table
* @descirption ein programm zum erstellen von tabellen in der konsole
* @example
* const table = new Table();
*/
  
class Table
{
    tableTitle;
    tableWidth;
    tableColumns;
    tableRows;

    // wir nennen die klasse table, da wir eine Tabelle damit erstellen wollen,und das der sinnvollste name (laut konvention) ist
    constructor({title, width, columns, rows} = {})
    {
        // die klasse sollte ein konfiguartionsobjekt in den constructor bekommen um dynamisch erstabbr zu sein 
        // wir brauchen eine variable die den namen der tabelle angibt, denn wir wolenn uber der tabelle den namen der      tabelle stehen haben
        //wir brauchen eine variabel die die breite der tabelle angibt der default wert sollte die breite der konsole sein
        // wir brauchen eine property die alle columns der tabelle und dessen werte beinhaltet 
        // wir brauchen eine property die alle rows der tabelle beinhaltet 

        this.tableTitle = title || "Default Table";
        this.tableWidth = width || process.stdout.columns; // der default gibt uns die breite der console
        this.tableColumns = columns || [];
        this.tableRows = rows || [];
    }

    

    // die klasse sollte getter und setter haben um diese einstellung gegebensjass ändern zu können 
        // wir bruahcne getter/setter für die tabellen titel
         // wir brauchen getter/setter für die tabellen breite
        // wir brauchen getter/setter für die columns
        // wir brauchen getter/setter fir die rows
    get title() { return this.tableTitle } 
    get width() { return this.tableWidth }
    get columns() { return this.tableColumns }
    get rows() { return this.tableRows }

    set title(input) { this.tableTitle = input }
    set width(input) { this.tableWidth = input }
    set columns(input) { this.tableColumns = input }
    set rows(input) { this.tableRows = input }
    
        /**
         * @method createTitle
         * @description erstellt den zentrierten titel über der tabelle
         * @returns {string}
         */
        createTitle()
        {
            const padding = Math.round((this.width - this.title.length) /2);
            
            //wir erwarten das padding eine zahl ausgibt
            console.log(padding);

            return `\n${ " ".repeat(padding)}${this.title}${ " ".repeat(padding)}`;
        }

        //wir brauchen eine mehtode die eine spalte erstellt

        /**
         * @method createColum
         * @description 
         * @param {string} text
         * @param {number} width
         * @returns {string}
         */
        createColum = (text,width) =>
        {
            //wir berechene die spaltenbreite

            const columnWidth = width - text.toString().length;
        
            return " " + text.toString() + " ".repeat(columnWidth - 3) + "|";
        }

         /**
         * @method createRow
         * @description 
         * @param {object} rows
         * @returns {string}
         */
        createRow = (rows) =>
        {
            // wir erstellen eine variabel in die wir die inhalte der zeile speichern und beginnen sie mit der linken pipe
            let tempString = "|";
            // wir erstellen eine variable in den wir die breite der tabelle speichern
            let width = this.width;
            
            for(let row in rows)
            {
                let width = this.width;

                this.columns.forEach((column,i) =>
                {
                    if(column.key === row)
                    {
                        //erste spalte
                        if(this.columns.length === i + 1)
                        {
                            tempString += this.createColum(rows[row], width + 2);
                        }
                        //letzte spalte
                        else
                        {
                            tempString += this.createColum(rows[row],column.width);
                        }
                    }
                    width -= column.width;
                });
            }

            return tempString;

        }

        /**
         * @method createDivider
         * @description erstellt den divider,mt den definierten längen der spalten
         * @return {string}
         */
        createDivider = () =>
        {
            let tempString = "|";
            let width = this.width;

            this.columns.forEach((column,i)=>
            {
                if(this.columns.length === i +1)
                {
                    tempString += "-".repeat(width) + "|";
                }
                else
                {
                    tempString += "-".repeat(column.width -2) + "|";
                }
                
                width -= column.width;
                  
            });

            return tempString;
        }

        /**
         * @method creatHeader
         * @description erstellt den header 
         * @return { string }
         */
        createHeader = () =>
        {
            let tempString = "|";
            let width = this.width;

            this.columns.forEach((column,i)=>
            {
                if(this.columns.length === i +1)
                {
                    tempString += this.createColum(column.title,width + 2);
                }
                else
                {
                    tempString += this.createColum(column.title,column.width );
                }
                
                width -= column.width;
                  
            });
            
            return tempString;
        }
        /**
         * @method showTable
         * @description fügt alles zusammen
         */
        showTable = () =>
        {
            console.log(this.createTitle());
            console.log(this.createHeader());
            console.log(this.createDivider());
           

            this.rows.forEach((row,i)=>
            {
                console.log(this.createRow(row));
            });

            console.log();
        }

       
    


    
  
}
// wir mussen die klasse exportieren um an ihre inhalte zu kommen und das porgramm zu starten
module.exports = Table;

