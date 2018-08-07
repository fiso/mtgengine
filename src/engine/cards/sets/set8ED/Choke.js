"use strict";
const Constants = require ("../../../Constants");
const ChokeBase = require("../setMP2/Choke");

class Choke extends ChokeBase {
  constructor (game) {
    super(game, "Choke", "Eighth Edition", "8ED");
  }
}

module.exports = Choke;
