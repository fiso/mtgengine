"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecollectBase = require("../setpMPR/Recollect.js");

class Recollect extends RecollectBase {
  constructor(game) {
    super(game, "Recollect", "Tenth Edition", "10E");
  }
}

module.exports = Recollect;
