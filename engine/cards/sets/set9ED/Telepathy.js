"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TelepathyBase = require("../set8ED/Telepathy.js");

class Telepathy extends TelepathyBase {
  constructor(game) {
    super(game, "Telepathy", "Ninth Edition", "9ED");
  }
}

module.exports = Telepathy;
