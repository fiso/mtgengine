"use strict";
const Constants = require ("../../../Constants");
const RighteousAvengersBase = require("../setLEG/RighteousAvengers");

class RighteousAvengers extends RighteousAvengersBase {
  constructor (game) {
    super(game, "Righteous Avengers", "Masters Edition", "MED");
  }
}

module.exports = RighteousAvengers;
