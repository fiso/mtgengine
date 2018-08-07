"use strict";
const Constants = require ("../../../Constants");
const AspectofWolfBase = require("../setPZ2/AspectofWolf");

class AspectofWolf extends AspectofWolfBase {
  constructor (game) {
    super(game, "Aspect of Wolf", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = AspectofWolf;
