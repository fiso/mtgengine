"use strict";
const Constants = require ("../../../Constants");
const RighteousAvengersBase = require("../setMED/RighteousAvengers");

class RighteousAvengers extends RighteousAvengersBase {
  constructor (game) {
    super(game, "Righteous Avengers", "Legends", "LEG");
  }
}

module.exports = RighteousAvengers;
