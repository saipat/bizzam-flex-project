import { connect } from 'react-redux';
import Theme from './theme';
import {postTheme, postThemeItem, postThemeItems} from '../../actions/theme_actions';

const mapStateToProps = state => {    
    return {        
        theme: {name: '', description: '', themeItems: []}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTheme: data => dispatch(postTheme(data)),
        postThemeItem: data => dispatch(postThemeItem(data)),
        postThemeItems: data => dispatch(postThemeItems(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);