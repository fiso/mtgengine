"use strict";
const Constants = require ("../../../Constants");
const AnkhofMishraBase = require("../setVMA/AnkhofMishra");

class AnkhofMishra extends AnkhofMishraBase {
  constructor (game) {
    super(game, "Ankh of Mishra", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = AnkhofMishra;
