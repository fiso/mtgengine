"use strict";
const Constants = require ("../../../Constants");
const XathridGorgonBase = require("../setM13/XathridGorgon");

class XathridGorgon extends XathridGorgonBase {
  constructor (game) {
    super(game, "Xathrid Gorgon", "Magic Online Promos", "PRM");
  }
}

module.exports = XathridGorgon;
