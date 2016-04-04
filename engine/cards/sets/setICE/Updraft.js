"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UpdraftBase = require("../set5ED/Updraft.js");

class Updraft extends UpdraftBase {
  constructor(game) {
    super(game, "Updraft", "Ice Age", "ICE");
  }
}

module.exports = Updraft;
