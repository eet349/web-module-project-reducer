import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import {
	addOne,
	applyNumber,
	changeOperation,
	clearDisplay,
	mAdd,
	mRetrieve,
	mClear,
} from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
	const [calcState, dispatch] = useReducer(reducer, initialState);

	const applyNumHandler = (num) => dispatch(applyNumber(num));

	const changeOperationHandler = (operation) =>
		dispatch(changeOperation(operation));

	return (
		<div className='App'>
			<nav className='navbar navbar-dark bg-dark'>
				<a className='navbar-brand' href='#'>
					<img width='40px' src='./Lambda-Logo-Red.png' /> Lambda Reducer
					Challenge
				</a>
			</nav>

			<div className='container row mt-5'>
				<div className='col-md-12 d-flex justify-content-center'>
					<form name='Cal'>
						<TotalDisplay value={calcState.total} />
						<div className='row details'>
							<span id='operation'>
								<b>Operation:</b> {calcState.operation}
							</span>
							<span id='memory'>
								<b>Memory:</b> {calcState.memory}
							</span>
						</div>

						<div className='row'>
							<CalcButton value={'M+'} onClick={() => dispatch(mAdd())} />
							<CalcButton value={'MR'} onClick={() => dispatch(mRetrieve())} />
							<CalcButton value={'MC'} onClick={() => dispatch(mClear())} />
						</div>

						<div className='row'>
							<CalcButton value={1} onClick={() => applyNumHandler(1)} />
							<CalcButton value={2} onClick={() => applyNumHandler(2)} />
							<CalcButton value={3} onClick={() => applyNumHandler(3)} />
						</div>

						<div className='row'>
							<CalcButton value={4} onClick={() => applyNumHandler(4)} />
							<CalcButton value={5} onClick={() => applyNumHandler(5)} />
							<CalcButton value={6} onClick={() => applyNumHandler(6)} />
						</div>

						<div className='row'>
							<CalcButton value={7} onClick={() => applyNumHandler(7)} />
							<CalcButton value={8} onClick={() => applyNumHandler(8)} />
							<CalcButton value={9} onClick={() => applyNumHandler(9)} />
						</div>

						<div className='row'>
							<CalcButton
								value={'+'}
								onClick={() => changeOperationHandler('+')}
							/>
							<CalcButton
								value={'*'}
								onClick={() => changeOperationHandler('*')}
							/>
							<CalcButton
								value={'-'}
								onClick={() => changeOperationHandler('-')}
							/>
						</div>

						<div className='row ce_button'>
							<CalcButton
								value={'CE'}
								onClick={() => dispatch(clearDisplay())}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
