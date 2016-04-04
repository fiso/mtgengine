"use strict";
const Constants = require ("../../../Constants");
const FarmsteadBase = require("../setCED/Farmstead");

class Farmstead extends FarmsteadBase {
  constructor(game) {
    super(game, "Farmstead", "Unlimited Edition", "2ED");
  }
}

module.exports = Farmstead;
