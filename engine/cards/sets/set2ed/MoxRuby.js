"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxRubyBase = require("../setCED/MoxRuby.js");

class MoxRuby extends MoxRubyBase {
  constructor(game) {
    super(game, "Mox Ruby", "Unlimited Edition", "2ED");
  }
}

module.exports = MoxRuby;
