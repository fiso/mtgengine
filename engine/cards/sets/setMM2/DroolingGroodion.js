"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DroolingGroodionBase = require("../setDDM/DroolingGroodion.js");

class DroolingGroodion extends DroolingGroodionBase {
  constructor(game) {
    super(game, "Drooling Groodion", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DroolingGroodion;
