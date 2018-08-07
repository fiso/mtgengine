"use strict";
const Constants = require ("../../../Constants");
const AretopolisBase = require("../setPCA/Aretopolis");

class Aretopolis extends AretopolisBase {
  constructor (game) {
    super(game, "Aretopolis", "Planechase 2012", "PC2");
  }
}

module.exports = Aretopolis;
