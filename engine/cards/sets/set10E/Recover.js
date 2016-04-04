"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecoverBase = require("../setINV/Recover.js");

class Recover extends RecoverBase {
  constructor(game) {
    super(game, "Recover", "Tenth Edition", "10E");
  }
}

module.exports = Recover;
