"use strict";
const Constants = require ("../../../Constants");
const MercurialPretenderBase = require("../setM15/MercurialPretender");

class MercurialPretender extends MercurialPretenderBase {
  constructor (game) {
    super(game, "Mercurial Pretender", "Magic Online Promos", "PRM");
  }
}

module.exports = MercurialPretender;
