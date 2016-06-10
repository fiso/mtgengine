"use strict";
const Constants = require ("../../../Constants");
const MightofOaksBase = require("../set8ED/MightofOaks");

class MightofOaks extends MightofOaksBase {
  constructor (game) {
    super(game, "Might of Oaks", "Ninth Edition", "9ED");
  }
}

module.exports = MightofOaks;
