"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShuntBase = require("../setDST/Shunt.js");

class Shunt extends ShuntBase {
  constructor(game) {
    super(game, "Shunt", "Tenth Edition", "10E");
  }
}

module.exports = Shunt;
