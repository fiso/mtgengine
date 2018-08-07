"use strict";
const Constants = require ("../../../Constants");
const MightofOaksBase = require("../setM10/MightofOaks");

class MightofOaks extends MightofOaksBase {
  constructor (game) {
    super(game, "Might of Oaks", "Eighth Edition", "8ED");
  }
}

module.exports = MightofOaks;
