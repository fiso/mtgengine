"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MercurialPretenderBase = require("../setM15/MercurialPretender.js");

class MercurialPretender extends MercurialPretenderBase {
  constructor(game) {
    super(game, "Mercurial Pretender", "Prerelease Events", "pPRE");
  }
}

module.exports = MercurialPretender;
