"use strict";
const Constants = require ("../../../Constants");
const ConquerBase = require("../set6ED/Conquer");

class Conquer extends ConquerBase {
  constructor(game) {
    super(game, "Conquer", "Fifth Edition", "5ED");
  }
}

module.exports = Conquer;
