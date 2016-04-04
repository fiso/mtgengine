"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoralEelBase = require("../set8ED/CoralEel.js");

class CoralEel extends CoralEelBase {
  constructor(game) {
    super(game, "Coral Eel", "Ninth Edition", "9ED");
  }
}

module.exports = CoralEel;
