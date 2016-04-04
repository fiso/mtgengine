"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NovijenHeartofProgressBase = require("../setC15/NovijenHeartofProgress.js");

class NovijenHeartofProgress extends NovijenHeartofProgressBase {
  constructor(game) {
    super(game, "Novijen, Heart of Progress", "Dissension", "DIS");
  }
}

module.exports = NovijenHeartofProgress;
