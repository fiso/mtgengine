"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NobilisofWarBase = require("../setDDL/NobilisofWar.js");

class NobilisofWar extends NobilisofWarBase {
  constructor(game) {
    super(game, "Nobilis of War", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NobilisofWar;
