"use strict";
const Constants = require ("../../../Constants");
const FarmsteadBase = require("../setCED/Farmstead");

class Farmstead extends FarmsteadBase {
  constructor (game) {
    super(game, "Farmstead", "Revised Edition", "3ED");
  }
}

module.exports = Farmstead;
