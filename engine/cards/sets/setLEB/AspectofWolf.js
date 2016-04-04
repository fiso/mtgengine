"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AspectofWolfBase = require("../setCED/AspectofWolf.js");

class AspectofWolf extends AspectofWolfBase {
  constructor(game) {
    super(game, "Aspect of Wolf", "Limited Edition Beta", "LEB");
  }
}

module.exports = AspectofWolf;
