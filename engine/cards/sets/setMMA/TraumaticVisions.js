"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TraumaticVisionsBase = require("../setCON/TraumaticVisions.js");

class TraumaticVisions extends TraumaticVisionsBase {
  constructor(game) {
    super(game, "Traumatic Visions", "Modern Masters", "MMA");
  }
}

module.exports = TraumaticVisions;
