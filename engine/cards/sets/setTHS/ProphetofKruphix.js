"use strict";
const Constants = require ("../../../Constants");
const ProphetofKruphixBase = require("../setCPK/ProphetofKruphix");

class ProphetofKruphix extends ProphetofKruphixBase {
  constructor(game) {
    super(game, "Prophet of Kruphix", "Theros", "THS");
  }
}

module.exports = ProphetofKruphix;
