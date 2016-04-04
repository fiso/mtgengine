"use strict";
const Constants = require ("../../../Constants");
const TraumaticVisionsBase = require("../setCON/TraumaticVisions");

class TraumaticVisions extends TraumaticVisionsBase {
  constructor(game) {
    super(game, "Traumatic Visions", "Modern Masters", "MMA");
  }
}

module.exports = TraumaticVisions;
