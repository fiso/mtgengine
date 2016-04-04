"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProvokeBase = require("../setCNS/Provoke.js");

class Provoke extends ProvokeBase {
  constructor(game) {
    super(game, "Provoke", "Tempest Remastered", "TPR");
  }
}

module.exports = Provoke;
