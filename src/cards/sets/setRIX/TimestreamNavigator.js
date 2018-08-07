"use strict";
const Constants = require ("../../../Constants");
const TimestreamNavigatorBase = require("../setPRIX/TimestreamNavigator");

class TimestreamNavigator extends TimestreamNavigatorBase {
  constructor (game) {
    super(game, "Timestream Navigator", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TimestreamNavigator;
