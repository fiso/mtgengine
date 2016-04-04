"use strict";
const Constants = require ("../../../Constants");
const NovijenHeartofProgressBase = require("../setC15/NovijenHeartofProgress");

class NovijenHeartofProgress extends NovijenHeartofProgressBase {
  constructor(game) {
    super(game, "Novijen, Heart of Progress", "Dissension", "DIS");
  }
}

module.exports = NovijenHeartofProgress;
