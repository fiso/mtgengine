"use strict";
const Constants = require ("../../../Constants");
const AspectofWolfBase = require("../setCED/AspectofWolf");

class AspectofWolf extends AspectofWolfBase {
  constructor (game) {
    super(game, "Aspect of Wolf", "Limited Edition Beta", "LEB");
  }
}

module.exports = AspectofWolf;
