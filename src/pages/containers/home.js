import React, { Component } from 'react';
import { connect } from 'react-redux';

import Related from '../components/related'
import HomeLayout from '../components/home-layout';

import Categories from '../../categories/component/categories';
import Modal from '../../widgets/component/modal';
import HandlerError from '../../error/container/handler-error';
import ModalContainer from '../../widgets/container/modal';
import SearchContainer from '../../widgets/container/search';
import VideoPlayerContainer from '../../video-player/containers/video-player';

class Home extends Component {

	state = {
		modal: false,
		media: null
	}

	handleToggleModal = (media) => {
		this.setState({
			modal: !this.state.modal,
			media: media
		})
	}

	render() {
		return (
			<HandlerError>
				<HomeLayout>
					<Related />
					<SearchContainer />
					<Categories
						categories={this.props.categories}
						search={this.props.search}
						handleModalToggle={this.handleToggleModal}
					/>
					{
						this.state.modal &&
						<ModalContainer>
							<Modal handleClick={this.handleToggleModal}>
								<VideoPlayerContainer
									media={this.state.media}
									autoplay={true}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandlerError>
		)
	}
}
const mapStateToProps = ({ data: { categories }, search }) => {
	return { categories, search }
};

export default connect(mapStateToProps)(Home);
