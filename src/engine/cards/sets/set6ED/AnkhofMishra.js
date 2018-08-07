"use strict";
const Constants = require ("../../../Constants");
const AnkhofMishraBase = require("../setVMA/AnkhofMishra");

class AnkhofMishra extends AnkhofMishraBase {
  constructor (game) {
    super(game, "Ankh of Mishra", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnkhofMishra;
