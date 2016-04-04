"use strict";
const Constants = require ("../../../Constants");
const TraumatizeBase = require("../setM10/Traumatize");

class Traumatize extends TraumatizeBase {
  constructor(game) {
    super(game, "Traumatize", "Ninth Edition", "9ED");
  }
}

module.exports = Traumatize;
