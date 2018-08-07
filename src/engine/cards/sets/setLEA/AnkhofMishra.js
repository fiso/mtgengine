"use strict";
const Constants = require ("../../../Constants");
const AnkhofMishraBase = require("../setVMA/AnkhofMishra");

class AnkhofMishra extends AnkhofMishraBase {
  constructor (game) {
    super(game, "Ankh of Mishra", "Limited Edition Alpha", "LEA");
  }
}

module.exports = AnkhofMishra;
